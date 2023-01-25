import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WatchListNoResults = () => {
  return (
    <View
      style={ styles.wrapper }
    >
      <View
        style={ styles.container }
      >
        <Image
          style={ styles.image }
          source={ require("../../assets/icons/magic_box.png") }
        />
        <Text
          style={ styles.title }
        >There Is No Movies Yet</Text>
        <Text
          style={ styles.subtitle }
        >Find movie and add to your watch list</Text>
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
    marginTop: 16,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    color: '#92929D',
    marginTop: 8,
  },
});

export default WatchListNoResults;
