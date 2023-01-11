import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { MainTabScreenProps } from "../navigation/Types";

const SearchScreen = ({ navigation }: MainTabScreenProps<'Search'>) => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text>Search screen</Text>

      <Button
        onPress={
          () => navigation.navigate('Detail')
        }
        title="Go to Detail"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#242A32',
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default SearchScreen;
