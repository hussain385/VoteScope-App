import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Navigation from './src/Config/Navigation/Navigation';
import { NativeBaseProvider } from 'native-base';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'

export default function App(props) {
  let [fontsLoaded] = useFonts({
    "Poppins-Medium": require("./src/Poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./src/Poppins/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <NativeBaseProvider>
          <StatusBar
            barStyle="white"
            hidden={false}
            backgroundColor="#014F92"
            translucent={true}
          />
          <Navigation />
        </NativeBaseProvider>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
