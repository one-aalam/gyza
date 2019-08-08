/* eslint-disable */
const debug = require('debug')('workspaces')
const findYarnWorkspaceRoot = require('find-yarn-workspace-root')
const fs = require('fs')
const blacklist = require('metro-config/src/defaults/blacklist')
const { assetExts } = require('metro-config/src/defaults/defaults')
const path = require('path')

/**
 * Returns a configuration object in the format expected for "rn-cli.config.js" files. The
 * configuration:
 *
 *   * includes the Yarn workspace root in Metro's list of root directories
 *   * resolves symlinked packages, namely workspaces
 *   * excludes all modules from Haste's module system (providesModule)
 *   * excludes modules in the native Android and Xcode projects
 */
exports.createReactNativeConfiguration = function createReactNativeConfiguration(
  projectPath
) {
  projectPath = path.resolve(projectPath)
  debug(
    'Creating a React Native configuration for the project at %s',
    projectPath
  )

  let watchFolders
  let extraNodeModules

  const workspaceRootPath = findYarnWorkspaceRoot(projectPath)
  if (workspaceRootPath) {
    debug('Found Yarn workspace root at %s', workspaceRootPath)
    watchFolders = [workspaceRootPath]
    extraNodeModules = {
      ...getSymlinkedNodeModulesForDirectory(workspaceRootPath),
      ...getSymlinkedNodeModulesForDirectory(projectPath)
    }
  } else {
    debug('Could not find Yarn workspace root')
    watchFolders = []
    extraNodeModules = getSymlinkedNodeModulesForDirectory(projectPath)
  }

  return {
    // Search for modules from the project's root directory
    projectRoot: projectPath,

    // Include npm packages from the workspace root, where packages are hoisted
    watchFolders,

    resolver: {
      // test-suite includes a db asset
      assetExts: [...assetExts, 'db'],

      // Make the symlinked packages visible to Metro
      extraNodeModules,

      // Use Node-style module resolution instead of Haste everywhere
      providesModuleNodeModules: [],

      // Ignore JS files in the native Android and Xcode projects
      blacklistRE: blacklist([
        /.*\/android\/ReactAndroid\/.*/,
        /.*\/versioned-react-native\/.*/
      ])
    },

    transformer: {
      // Ignore file-relative Babel configurations and apply only the project's
      enableBabelRCLookup: false
    }
  }
}

/**
 * Returns a mapping from the names of symlinked packages to the physical paths of each package.
 */
function getSymlinkedNodeModulesForDirectory(packagePath) {
  const nodeModulesPath = path.join(packagePath, 'node_modules')
  const directories = listDirectoryContents(nodeModulesPath)

  const modules = {}
  for (const directory of directories) {
    // The directory is either a scope or a package
    if (directory.startsWith('@')) {
      const scopePath = path.join(nodeModulesPath, directory)
      const scopedPackageDirectories = fs.readdirSync(scopePath)
      for (const subdirectory of scopedPackageDirectories) {
        const dependencyName = `${directory}/${subdirectory}`
        const dependencyPath = path.join(scopePath, subdirectory)
        if (fs.lstatSync(dependencyPath).isSymbolicLink()) {
          modules[dependencyName] = fs.realpathSync(dependencyPath)
        }
      }
    } else {
      const dependencyName = directory
      const dependencyPath = path.join(nodeModulesPath, directory)
      if (fs.lstatSync(dependencyPath).isSymbolicLink()) {
        modules[dependencyName] = fs.realpathSync(dependencyPath)
      }
    }
  }
  return modules
}

function listDirectoryContents(directory) {
  try {
    return fs.readdirSync(directory)
  } catch (e) {
    if (e.code === 'ENOENT') {
      return []
    }
    throw e
  }
}
