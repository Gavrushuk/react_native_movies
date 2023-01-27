import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  list: any[],
};

const MovieDeatilsReviews = ({ list }: Props) => {
  const review = (item: any, index: number) => {
    return (
      <View
        style={ styles.review }
        key={ index }
      >
        <View
          style={ styles.reviewLeftSide }
        >
          <Image
            style={ styles.reviewAvatar }
            source={ require('../../assets/movies/movie-2.png') }
          />
          <Text
            style={ styles.reviewRate }
          >6.3</Text>
        </View>
        <View
          style={ styles.reviewRightSide }
        >
          <Text
            numberOfLines={ 1 }
            style={ styles.reviewTitle }
          >Iqbal Shafiq Rozaan</Text>
          <Text
            style={ styles.reviewDescription }
          >
            From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government.
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {
        list.map((item: any, index: number) => review(item, index))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  review: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  reviewLeftSide: {
    
  },
  reviewAvatar: {
    width: 44,
    height: 44,
    borderRadius: 44,
    resizeMode: 'cover',
    objectFit: 'cover',
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
