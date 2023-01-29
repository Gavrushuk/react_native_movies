import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  list: any[],
};

const MovieDeatilsReviews = ({ list }: Props) => {
  const review = (item: any) => {
    const API_IMG = "https://image.tmdb.org/t/p/w300";

    return (
      <View
        style={ styles.review }
        key={ item.id }
      >
        <View
          style={ styles.reviewLeftSide }
        >
          <Image
            style={ styles.reviewAvatar }
            source={
              item.author_details.avatar_path ?
                { uri: `${API_IMG}${item.author_details.avatar_path}` }
                : require('../../assets/icons/default_avatar.png')
            }
          />
          <Text
            style={ styles.reviewRate }
          >{ item.author_details.rating }</Text>
        </View>
        <View
          style={ styles.reviewRightSide }
        >
          <Text
            numberOfLines={ 1 }
            style={ styles.reviewTitle }
          >{ item.author }</Text>
          <Text
            style={ styles.reviewDescription }
          >{ item.content }</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {
        list.map((item: any) => review(item))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  review: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 25,
  },
  reviewLeftSide: {
    
  },
  reviewAvatar: {
    width: 44,
    height: 44,
    borderRadius: 44,
    resizeMode: 'cover',
    objectFit: 'cover',
    backgroundColor: 'rgba(2, 150, 229, 0.7)',
  },
  reviewRate: {
    textAlign: 'center',
    color: '#0296E5',
    marginTop: 14,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
  },
  reviewRightSide: {
    flex: 1,
    marginLeft: 12,
  },
  reviewTitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
    width: '100%',
  },
  reviewDescription: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    marginTop: 5,
    color: '#FFFFFF',
  },
});

export default MovieDeatilsReviews;
