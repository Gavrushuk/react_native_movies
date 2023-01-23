import React from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import MoviesList from "../elements/MoviesList";
import { MainTabScreenProps } from "../navigation/Types";

const WatchListScreen = ({ navigation }: MainTabScreenProps<'WatchList'>) => {
  const goToDatail = () => {
    navigation.navigate('Detail');
  };

  return (
    <SafeAreaView
      style={ styles.scrollView }
    >
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
    paddingTop: 24,
  }
});

export default WatchListScreen;
