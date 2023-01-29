import React, { useEffect, useState } from "react";
import { DefaultTheme, NavigationContainer, Theme, useRoute } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import BottomBar from "./BottomBar";
import { RootStackParamList } from "./Types";
import DetailScreen from "../screens/DetailScreen";
import { Image, Pressable, StatusBar, StyleSheet, ToastAndroid } from "react-native";
import config from "../../config";
import AsyncStorage from "@react-native-community/async-storage";

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
  const { id } = route?.params;
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    getWatchListFromStore();
  }, []);

  const setWatchListToStore = async (value: string) => {
    try {
      await AsyncStorage.setItem(
        'WATCH_LIST',
        value,
      );
    } catch (error) {
      console.error(error);
      ToastAndroid.show('Set Watch List To Store Error', ToastAndroid.SHORT);
    }
  };
  
  const getWatchListFromStore = async () => {
    try {
      const value = await AsyncStorage.getItem('WATCH_LIST');
      
      if (value !== null) {
        setWatchList(JSON.parse(value));
      }
    } catch (error) {
      console.error(error);
      ToastAndroid.show('Get Watch List To Store Error', ToastAndroid.SHORT);
    }
  };

  const markMovie = async () => {
    await getWatchListFromStore();

    if (watchList.filter((item: any) => item?.id === id).length) {
      setWatchListToStore(JSON.stringify(watchList.filter((item: any) => item?.id != id)));
      await getWatchListFromStore();
      return;
    }

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ config.TMDB_API_KEY }&language=en-US`);
      const responseJson = await response.json();
      
      setWatchListToStore(JSON.stringify([...watchList, responseJson]));
      await getWatchListFromStore();
    } catch(error){
      console.error(error);
      ToastAndroid.show('Get Movie Details Error', ToastAndroid.SHORT);
    }
  };
  
  return (
    <Pressable
      onPress={ markMovie }
    >
      {
        watchList.filter((item: any) => item?.id === id).length ?
            <Image
              source={ require('../../assets/icons/mark_active.png') }
              style={ styles.headerRightIcon }
            />
          :
            <Image
              source={ require('../../assets/icons/mark.png') }
              style={ styles.headerRightIcon }
            />
      }
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