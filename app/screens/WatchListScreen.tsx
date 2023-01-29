import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MoviesList from "../elements/MoviesList";
import WatchListNoResults from "../elements/WatchListNoResults";
import { MainTabScreenProps } from "../navigation/Types";

const WatchListScreen = ({ navigation }: MainTabScreenProps<'WatchList'>) => {
  const [movies, setMovies] = useState([]);
  
  const goToDatail = (id: number) => {
    navigation.navigate('Detail', { id });
  };

  return (
    <SafeAreaView
      style={ styles.safeAreaView }
    >
      {
        movies?.length ?
          <MoviesList
            list={ movies }
            goToDetail={ goToDatail }
          />
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
