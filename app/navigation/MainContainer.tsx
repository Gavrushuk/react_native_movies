import React from "react";
import { DefaultTheme, NavigationContainer, Theme } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import BottomBar from "./BottomBar";
import { RootStackParamList } from "./Types";
import DetailScreen from "../screens/DetailScreen";
import { Image, StatusBar } from "react-native";

const Stack = createStackNavigator<RootStackParamList>()

const NavigationContainerTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#242A32'
  },
};

const screenOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontSize: 16
  },
  headerStyle: {
    backgroundColor: '#242A32',
    elevation: 0,
    shadowOpacity: 0,
  },
  cardStyle: {
    backgroundColor: '#242A32',
  },
  headerBackImage: () => (
    <Image
      source={ require("../../assets/back_button.png") }
      style={{
        width: 36,
        height: 36,
      }}
    />
  ),
};

const MainContainer = () => {
  return (
    <NavigationContainer theme={ NavigationContainerTheme }>
      <StatusBar backgroundColor="#242A32" />

      <Stack.Navigator
        screenOptions={ screenOptions }
      >
        <Stack.Screen
          name="Main"
          component={ BottomBar }
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={ DetailScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainContainer;