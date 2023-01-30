import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, ToastAndroid } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MoviesList from "../elements/MoviesList";
import WatchListNoResults from "../elements/WatchListNoResults";
import { MainTabScreenProps } from "../navigation/Types";

const WatchListScreen = ({ navigation }: MainTabScreenProps<'WatchList'>) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    navigation.addListener('focus', () => getWatchListFromStore());
  }, []);
  
  const goToDatail = (id: number) => {
    navigation.navigate('Detail', { id });
  };

  const getWatchListFromStore = async () => {
    try {
      const value = await AsyncStorage.getItem('WATCH_LIST');
      
      if (value !== null) {
        setMovies(JSON.parse(value));
      }
    } catch (error) {
      console.error(error);
      ToastAndroid.show('Get Watch List To Store Error', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView
      style={ styles.safeAreaView }
    >
      {
        movies?.length ?
          <ScrollView
            showsVerticalScrollIndicator={ false }
          >
            <MoviesList
              list={ movies }
              goToDetail={ goToDatail }
            />
          </ScrollView>
        : <WatchListNoResults />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#242A32',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 24,
  }
});

export default WatchListScreen;
