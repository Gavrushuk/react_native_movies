import React, { useEffect } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import SearchInput from "../elements/SearchInput";
import { MainTabScreenProps } from "../navigation/Types";

const SearchScreen = ({ navigation }: MainTabScreenProps<'Search'>) => {
  return (
    <ScrollView style={ styles.scrollView }>
      <View
        style={{
          marginVertical: 21
        }}
      >
        <SearchInput />
      </View>

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
    paddingLeft: 25,
    paddingRight: 25,
  }
});

export default SearchScreen;
