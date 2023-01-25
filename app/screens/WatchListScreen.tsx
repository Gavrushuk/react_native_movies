import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MoviesList from "../elements/MoviesList";
import WatchListNoResults from "../elements/WatchListNoResults";
import { MainTabScreenProps } from "../navigation/Types";

const WatchListScreen = ({ navigation }: MainTabScreenProps<'WatchList'>) => {
  const [movies, setMovies] = useState([]);
  
  const goToDatail = () => {
    navigation.navigate('Detail');
  };

  return (
    <SafeAreaView
      style={ styles.scrollView }
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
  scrollView: {
    flex: 1,
    backgroundColor: '#242A32',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 24,
  }
});

export default WatchListScreen;
