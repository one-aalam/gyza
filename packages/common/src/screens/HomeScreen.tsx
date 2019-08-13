import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';


import { Heading, Subheading } from '../components/StyledText';
import { Container, TitleBar } from '../components/Container';
import { Card } from '../components/Card';
import { Menu } from '../components/Menu';

export const HomeScreen: React.SFC = () => {
  return (
    <Container>
      <Menu/>
      <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
      <TitleBar>
        <Heading>Hello</Heading>
        <Subheading>Aftab</Subheading>
        <Icon
          name={'ios-notifications'}
          size={26}
          style={{ position: 'absolute', top: 20, right: 20 }}
          color={'#4775f2'}
        />
      </TitleBar>
        <ScrollView
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </ScrollView>
        </ScrollView>
        </SafeAreaView>
    </Container>
  );
}

// HomeScreen.navigationOptions = {
//   header: null,
// };


function handlePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 30
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
