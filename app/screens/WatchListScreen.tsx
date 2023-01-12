import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { MainTabScreenProps } from "../navigation/Types";

const WatchListScreen = ({ navigation }: MainTabScreenProps<'WatchList'>) => {
  return (
    <ScrollView style={ styles.scrollView }>
      <Text>Watch list screen</Text>

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

export default WatchListScreen;
