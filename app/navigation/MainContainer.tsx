import React from "react";
import { DefaultTheme, NavigationContainer, Theme, useRoute } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import BottomBar from "./BottomBar";
import { RootStackParamList } from "./Types";
import DetailScreen from "../screens/DetailScreen";
import { Image, Pressable, StatusBar, StyleSheet } from "react-native";

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
      source={ require("../../assets/icons/back_button.png") }
      style={{
        width: 36,
        height: 36,
      }}
    />
  ),
};

const DetailsHeaderMark = () => {
  const route: any = useRoute();

  const markMovie = () => {
    
  }
  
  return (
    <Pressable
      onPress={ () => markMovie }
    >
      <Image
        source={ require('../../assets/icons/mark.png') }
        style={ styles.headerRightIcon }
      />
      {/* <Image
        source={ require('../../assets/icons/mark_active.png') }
        style={ styles.headerRightIcon }
      /> */}
    </Pressable>
  );
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
          options={() => ({
            headerRight: () => <DetailsHeaderMark />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  headerRightIcon: {
    width: 18,
    height: 24,
    margin: 24,
  }
});

export default MainContainer;