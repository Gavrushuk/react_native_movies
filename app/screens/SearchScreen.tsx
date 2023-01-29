import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, ToastAndroid, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import config from "../../config";
import MoviesList from "../elements/MoviesList";
import SearchInput from "../elements/SearchInput";
import SearchNoResults from "../elements/SearchNoResults";
import { MainTabScreenProps } from "../navigation/Types";

const SearchScreen = ({ navigation }: MainTabScreenProps<'Search'>) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const findMovies = (search: string, page: number = 1) => {
    if (!search) {
      setSearchValue('');
      setMovies([]);
      setPage(1);
      setTotalPages(10);
      return;
    }

    setSearchValue(search);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ config.TMDB_API_KEY }&language=en-US&query=${ search }&page=${ page }&include_adult=false`)
      .then(res => res.json())
      .then(async (data: any) => {
        if (data) {
          try {
            let updatedMoviesData: any = [];

            for (let foundMovie of data.results) {
              const response = await fetch(`https://api.themoviedb.org/3/movie/${ foundMovie.id }?api_key=${ config.TMDB_API_KEY }&language=en-US`);
              const responseJson = await response.json();

              updatedMoviesData.push(responseJson);
            }

            if (page > 1) {
              setMovies([
                ...movies,
                ...updatedMoviesData,
              ]);
            } else {
              setMovies(updatedMoviesData);
            }
            
            setPage(data.page);
            setTotalPages(data.total_pages);
          } catch(error){
            console.error(error);
            ToastAndroid.show('Get Movie Details Error', ToastAndroid.SHORT);
          }
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Search Movies Error', ToastAndroid.SHORT);
      });
  };

  const loadMore = () => {
    if (page < totalPages) {
      findMovies(searchValue, page + 1);
    }
  };

  const goToDatail = (id: number) => {
    navigation.navigate('Detail', { id });
  };

  return (
    <SafeAreaView
      style={ styles.safeAreaView }
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
            <ScrollView
              style={ styles.listScroll }
              showsVerticalScrollIndicator={ false }
            >
              <View
                style={ styles.moviesListWrapper }
              >
                <MoviesList
                  list={ movies }
                  goToDetail={ goToDatail }
                />
              </View>

              <Button
                color="#0296E5"
                title="Load more"
                onPress={ loadMore }
              />
            </ScrollView>
          : <SearchNoResults />
        }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#242A32',
  },
  searchInputWrapper: {
    marginVertical: 21,
    paddingHorizontal: 25,
  },
  listScroll: {
    flex: 1,
  },
  moviesListWrapper: {
    flex: 1,
    paddingHorizontal: 25,
  }
});

export default SearchScreen;
