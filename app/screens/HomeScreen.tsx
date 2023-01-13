import React from "react";
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import BestRateMovies from "../elements/BestRateMovies";
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
    <ScrollView style={ styles.scrollView }>
      <Text style={ styles.title }>What do you want to watch?</Text>

      <Pressable
        onPress={ goToSearch }
        style={{
          marginVertical: 21
        }}
      >
        <View
          pointerEvents="none"
        >
          <SearchInput />
        </View>
      </Pressable>

      <BestRateMovies />

      <Button
        onPress={ goToDatail }
        title="Go to Detail"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '600'
  },
  scrollView: {
    backgroundColor: '#242A32',
    paddingLeft: 25,
    paddingRight: 25,
  }
});

export default HomeScreen;
