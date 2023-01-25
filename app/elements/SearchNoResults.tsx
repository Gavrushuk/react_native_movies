import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SearchNoResults = () => {
  return (
    <View
      style={ styles.wrapper }
    >
      <View
        style={ styles.container }
      >
        <Image
          style={ styles.image }
          source={ require("../../assets/icons/no_results.png") }
        />
        <Text
          style={[
            styles.title,
            styles.titleFirst
          ]}
        >We Are Sorry, We Can</Text>
        <Text
          style={ styles.title }
        >Not Find The Movie :(</Text>
        <Text
          style={[
            styles.subtitle,
            styles.subtitleFirst
          ]}
        >Find your movie by Type title,</Text>
        <Text
          style={ styles.subtitle }
        >categories, years, etc</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 76,
    height: 76,
  },
  title: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '600',
    color: '#EBEBEF',
  },
  titleFirst: {
    marginTop: 16,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    color: '#92929D',
  },
  subtitleFirst: {
    marginTop: 8
  },
});

export default SearchNoResults;
