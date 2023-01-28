import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  movie: any,
}

const MovieDetailsHero = ({ movie }: Props) => {
  const API_BACKDROP_IMG = "https://image.tmdb.org/t/p/original";
  const API_POSTER_IMG = "https://image.tmdb.org/t/p/w300";
  
  return (
    <View>
      <View
        style={ styles.backdropImgWrapper }
      >
        <Image
          style={ styles.backdropImg }
          source={
            movie?.backdrop_path ?
              { uri: `${API_BACKDROP_IMG}${movie?.backdrop_path}` }
              : require('../../assets/images/no_backdrop.png')
          }
        />

        <View
          style={ styles.movieRate }
        >
          <Image
            style={ styles.movieRateIcon }
            source={ require("../../assets/icons/star.png") }
          />
          <Text
            style={ styles.movieRateText }
          >{ movie?.vote_average.toFixed(1) }</Text>
        </View>
      </View>

      <View
        style={ styles.movieDetailsInfoContainer }
      >
        <View
          style={ styles.movieDetailsHeader }
        >
          <Image
            style={ styles.movieDetailsImg }
            source={
              movie?.poster_path ?
                { uri: `${API_POSTER_IMG}${movie?.poster_path}` }
                : require('../../assets/images/no_poster.png')
            }
          />
          <Text
            numberOfLines={ 2 }
            style={ styles.movieDetailsTitle }
          >{ movie?.title }</Text>
        </View>

        <View
          style={ styles.movieDetailsLine }
        >
          <View
            style={ styles.movieDetailsLineItem }
          >
            <Image
              style={ styles.movieDetailsIcon }
              source={ require("../../assets/icons/calendar_blank.png") }
            />
            <Text
              style={ styles.movieDetailsText }
            >{ new Date(movie?.release_date).getFullYear() }</Text>
          </View>
          <View
            style={ [styles.movieDetailsLineItem, styles.movieDetailsLineSecondItem] }
          >
            <Image
              style={ styles.movieDetailsIcon }
              source={ require("../../assets/icons/clock.png") }
            />
            <Text
              style={ styles.movieDetailsText }
            >{ movie?.runtime } minutes</Text>
          </View>
          <View
            style={ styles.movieDetailsLineItem }
          >
            <Image
              style={ styles.movieDetailsIcon }
              source={ require("../../assets/icons/ticket.png") }
            />
            <Text
              style={ styles.movieDetailsText }
            >{ movie?.genres.map((g: any) => g.name)[0] }</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backdropImgWrapper: {
    position: 'relative',
    marginTop: 10,
  },
  backdropImg: {
    width: '100%',
    height: 210,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    resizeMode: 'cover',
    objectFit: 'cover',
  },
  movieRate: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'rgba(37, 40, 54, 0.32)',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  movieRateIcon: {
    width: 16,
    height: 16,
  },
  movieRateText: {
    marginLeft: 4,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#FF8700',
  },
  movieDetailsInfoContainer: {
    position: 'relative',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: -60,
  },
  movieDetailsHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  movieDetailsImg: {
    width: 95,
    height: 120,
    borderRadius: 16,
    resizeMode: 'cover',
    objectFit: 'cover',
  },
  movieDetailsTitle: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    marginLeft: 12,
    color: '#ffffff',
    flex: 1,
  },
  movieDetailsLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  movieDetailsLineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  movieDetailsLineSecondItem: {
    borderColor: '#696974',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  movieDetailsIcon: {
    width: 16,
    height: 16,
    tintColor: '#92929D',
  },
  movieDetailsText: {
    color: '#92929D',
    marginLeft: 4,
  },
});

export default MovieDetailsHero;