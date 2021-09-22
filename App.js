import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Contants from 'expo-constants';

import Home from './screens/Home';
import CreateUser from './screens/CreateUser';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

const myOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#179c52'
  }
}

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Create" component={CreateUser} options={myOptions}/>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    //marginTop: Contants.statusBarHeight
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
