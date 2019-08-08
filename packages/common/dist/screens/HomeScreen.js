"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WebBrowser = __importStar(require("expo-web-browser"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var StyledText_1 = require("../components/StyledText");
exports.HomeScreen = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.ScrollView, { style: styles.container, contentContainerStyle: styles.contentContainer },
            react_1.default.createElement(react_native_1.View, { style: styles.welcomeContainer }),
            react_1.default.createElement(react_native_1.View, { style: styles.getStartedContainer },
                react_1.default.createElement(DevelopmentModeNotice, null),
                react_1.default.createElement(react_native_1.Text, { style: styles.getStartedText }, "Get started by opening"),
                react_1.default.createElement(react_native_1.View, { style: [styles.codeHighlightContainer, styles.homeScreenFilename] },
                    react_1.default.createElement(StyledText_1.MonoText, null, "screens/HomeScreen.js")),
                react_1.default.createElement(react_native_1.Text, { style: styles.getStartedText }, "Change this text and your app will automatically reload.")),
            react_1.default.createElement(react_native_1.View, { style: styles.helpContainer },
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: handleHelpPress, style: styles.helpLink },
                    react_1.default.createElement(react_native_1.Text, { style: styles.helpLinkText }, "Help, it didn\u2019t automatically reload!")))),
        react_1.default.createElement(react_native_1.View, { style: styles.tabBarInfoContainer },
            react_1.default.createElement(react_native_1.Text, { style: styles.tabBarInfoText }, "This is a tab bar. You can edit it in:"),
            react_1.default.createElement(react_native_1.View, { style: [styles.codeHighlightContainer, styles.navigationFilename] }))));
};
// HomeScreen.navigationOptions = {
//   header: null,
// };
function DevelopmentModeNotice() {
    if (__DEV__) {
        var learnMoreButton = (react_1.default.createElement(react_native_1.Text, { onPress: handleLearnMorePress, style: styles.helpLinkText }, "Learn more"));
        return (react_1.default.createElement(react_native_1.Text, { style: styles.developmentModeText },
            "Development mode is enabled: your app will be slower but you can use useful development tools. ",
            learnMoreButton));
    }
    else {
        return (react_1.default.createElement(react_native_1.Text, { style: styles.developmentModeText }, "You are not in development mode: your app will run at full speed."));
    }
}
function handleLearnMorePress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}
function handleHelpPress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes');
}
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: __assign({ position: 'absolute', bottom: 0, left: 0, right: 0 }, react_native_1.Platform.select({
        ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
        },
        android: {
            elevation: 20,
        },
    }), { alignItems: 'center', backgroundColor: '#fbfbfb', paddingVertical: 20 }),
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
