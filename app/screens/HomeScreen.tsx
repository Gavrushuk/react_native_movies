import React from "react";
import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import BestRateMovies from "../elements/BestRateMovies";
import HomeTabs from "../elements/HomeTabs";
import SearchInput from "../elements/SearchInput";
import { MainTabScreenProps } from "../navigation/Types";

const HomeScreen = ({ navigation }: MainTabScreenProps<'Home'>) => {
  const goToSearch = () => {
    navigation.navigate('Search', { isAutoFocused: true });
  };
  
  const goToDatail = () => {
    navigation.navigate('Detail');
  };
  
  return (
    <ScrollView
      style={ styles.scrollView }
    >
      <Text
        style={ styles.title }
      >
        What do you want to watch?
      </Text>

      <Pressable
        onPress={ goToSearch }
        style={ styles.searchBtn }
      >
        <View
          pointerEvents="none"
        >
          <SearchInput />
        </View>
      </Pressable>

      <BestRateMovies
        goToDetail={ goToDatail }
      />
      
      <HomeTabs
        goToDetail={ goToDatail }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '600',
    marginHorizontal: 25,
  },
  searchBtn: {
    marginVertical: 21,
    marginHorizontal: 25
  },
  scrollView: {
    backgroundColor: '#242A32',
  },
});

export default HomeScreen;
