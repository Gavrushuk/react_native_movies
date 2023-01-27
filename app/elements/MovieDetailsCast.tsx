import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  list: any[],
};

const MovieDeatilsCast = ({ list }: Props) => {
  const castItem = (item: any, index: number) => {
    return (
      <View
        style={ styles.castItem }
        key={ index }
      >
        <Image
          style={ styles.castItemAvatar }
          source={ require('../../assets/movies/movie-2.png') }
        />
        <Text
          numberOfLines={ 2 }
          style={ styles.castItemName }
        >Tom Holland</Text>
      </View>
    );
  };

  return (
    <View
      style={ styles.castList }
    >
      {
        list.map((item: any, index: number) => castItem(item, index))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  castList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  castItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 24,
    width: 150,
  },
  castItemAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover',
    objectFit: 'cover',
  },
  castItemName: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    marginTop: 8,
    width: '100%',
    textAlign: 'center',
  },
});

export default MovieDeatilsCast;
