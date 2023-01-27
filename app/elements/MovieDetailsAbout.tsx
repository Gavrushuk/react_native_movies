import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  description: string,
};

const MovieDeatilsAbout = ({ description }: Props) => {
  return (
    <View>
      <Text
        style={ styles.text }
      >{ description }</Text>
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
