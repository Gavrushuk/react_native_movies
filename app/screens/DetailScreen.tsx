import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailScreen = () => {
  return (
    <View style={ styles.scrollView }>
      <Text>Detail screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#242A32',
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default DetailScreen;
