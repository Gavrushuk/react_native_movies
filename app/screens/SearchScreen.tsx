import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ToastAndroid, View } from "react-native";
import config from "../../config";
import MoviesList from "../elements/MoviesList";
import SearchInput from "../elements/SearchInput";
import SearchNoResults from "../elements/SearchNoResults";
import { MainTabScreenProps } from "../navigation/Types";

const SearchScreen = ({ navigation }: MainTabScreenProps<'Search'>) => {
  const [movies, setMovies] = useState([]);

  const findMovies = (search: string) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ config.TMDB_API_KEY }&language=en-US&query=${ search }&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setMovies(data.results);
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Search Movies Error', ToastAndroid.SHORT);
      });
  };

  const goToDatail = () => {
    navigation.navigate('Detail');
  };

  return (
    <SafeAreaView
      style={ styles.scrollView }
    >
      <View
        style={ styles.searchInputWrapper }
      >
        <SearchInput
          onChange={ findMovies }
        />
      </View>
      
      {
        movies?.length ?
          <MoviesList
            list={ movies }
            goToDetail={ goToDatail }
          />
        : <SearchNoResults />
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
  },
  searchInputWrapper: {
    marginVertical: 21,
  }
});

export default SearchScreen;
