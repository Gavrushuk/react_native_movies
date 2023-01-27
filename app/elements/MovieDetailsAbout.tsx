import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MovieDeatilsAbout = () => {
  return (
    <View>
      <Text
        style={ styles.text }
      >From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#ffffff',
  },
});

export default MovieDeatilsAbout;
