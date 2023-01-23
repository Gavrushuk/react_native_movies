import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import MoviesList from "../elements/MoviesList";
import SearchInput from "../elements/SearchInput";
import { MainTabScreenProps } from "../navigation/Types";

const SearchScreen = ({ navigation }: MainTabScreenProps<'Search'>) => {
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
        <SearchInput />
      </View>
      
      <MoviesList
        goToDetail={ goToDatail }
      />
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
