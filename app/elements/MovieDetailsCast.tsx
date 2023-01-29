import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  list: any[],
};

const MovieDeatilsCast = ({ list }: Props) => {
  const castItem = (item: any) => {
    const API_IMG = "https://image.tmdb.org/t/p/w200";

    return (
      <View
        style={ styles.castItem }
        key={ item.id }
      >
        <Image
          style={ styles.castItemAvatar }
          source={
            item.profile_path ?
              { uri: `${API_IMG}${item.profile_path}` }
              : require('../../assets/icons/default_avatar.png')
          }
        />
        <Text
          numberOfLines={ 2 }
          style={ styles.castItemName }
        >{ item.name }</Text>
      </View>
    );
  };

  return (
    <View
      style={ styles.castList }
    >
      {
        list.map((item: any) => castItem(item))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  castList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 25,
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
    backgroundColor: 'rgba(2, 150, 229, 0.7)',
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
