import React from "react";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoritesScreen from "../screens/WatchListScreen";
import { Image } from "react-native";
import { MainTabParamList } from "./Types";

const Tab = createBottomTabNavigator<MainTabParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerTitleAlign: 'center',
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontSize: 16
  },
  headerStyle: {
    backgroundColor: '#242A32',
    elevation: 0,
    shadowOpacity: 0
  },
  tabBarStyle: {
    backgroundColor: '#242A32',
    borderTopColor: '#0296E5',
    borderTopWidth: 1,
    height: 78,
    paddingTop: 10,
    paddingBottom: 15
  },
  tabBarLabelStyle: {
    fontSize: 12
  },
};

const homeScreenOptions = {
  headerShown: false,
  tabBarLabel: 'Home',
  tabBarInactiveTintColor: "#67686D",
  tabBarActiveTintColor: "#0296E5",
  tabBarIcon: ({ focused }: any) => (
    <Image
      source={
        focused
          ? require("../../assets/icons/home_active.png")
          : require("../../assets/icons/home.png")
      }
      style={{
        width: 22,
        height: 24,
      }}
    />
  ),
};

const searchScreenOptions = {
  tabBarLabel: "Search",
  tabBarInactiveTintColor: "#67686D",
  tabBarActiveTintColor: "#0296E5",
  tabBarIcon: ({ focused }: any) => (
    <Image
      source={
        focused
          ? require("../../assets/icons/search_active.png")
          : require("../../assets/icons/search.png")
      }
      style={{
        width: 22,
        height: 24,
      }}
    />
  ),
};

const watchListScreenOptions = {
  headerTitle: "Watch list",
  tabBarLabel: "Watch list",
  tabBarInactiveTintColor: "#67686D",
  tabBarActiveTintColor: "#0296E5",
  tabBarIcon: ({ focused }: any) => (
    <Image
      source={
        focused
          ? require("../../assets/icons/favorites_active.png")
          : require("../../assets/icons/favorites.png")
      }
      style={{
        width: 22,
        height: 24,
      }}
    />
  ),
};

const BottomBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={ screenOptions }
    >
      <Tab.Screen
        name="Home"
        component={ HomeScreen }
        options={ homeScreenOptions }
      />
      <Tab.Screen
        name="Search"
        component={ SearchScreen }
        options={ searchScreenOptions }
      />
      <Tab.Screen
        name="WatchList"
        component={ FavoritesScreen }
        options={ watchListScreenOptions }
      />
    </Tab.Navigator>
  )
};

export default BottomBar;