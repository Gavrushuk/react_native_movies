import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import config from "../../config";
import MovieDeatilsAbout from "../elements/MovieDetailsAbout";
import MovieDeatilsCast from "../elements/MovieDetailsCast";
import MovieDeatilsReviews from "../elements/MovieDetailsReviews";
import Tabs from "../elements/Tabs";

const DetailScreen = () => {
  const API_BACKDROP_IMG = "https://image.tmdb.org/t/p/original";
  const API_POSTER_IMG = "https://image.tmdb.org/t/p/w300";
  const route: any = useRoute();
  const listTab = [
    { title: "About Movie", value: "about_movie" },
    { title: "Reviews", value: "reviews" },
    { title: "Cast", value: "cast" },
  ];
  const [activeTab, setActiveTab] = useState("about_movie");
  const [movie, setMovie] = useState<any>();
  const [reviews, setReviews] = useState([]);
  const [credits, setCredits] = useState<any>([]);

  const getMovieDetailsById = (id: number) => {
    fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ config.TMDB_API_KEY }&language=en-US`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          console.log(data.backdrop_path);
          setMovie(data);
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Get Movie Details Error', ToastAndroid.SHORT);
      });
  };

  const getReviews = (id: number) => {
    fetch(`https://api.themoviedb.org/3/movie/${ id }/reviews?api_key=${ config.TMDB_API_KEY }&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setReviews(data.results);
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Get Reviews Error', ToastAndroid.SHORT);
      });
  };

  const getCredits = (id: number) => {
    fetch(`https://api.themoviedb.org/3/movie/${ id }/credits?api_key=${ config.TMDB_API_KEY }&language=en-US`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setCredits(data);
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Get Credits Error', ToastAndroid.SHORT);
      });
  };

  useEffect(() => {
    const { id } = route.params;

    if (id) {
      getMovieDetailsById(id);
      getReviews(id);
      getCredits(id);
    }
  }, []);

  return (
    <ScrollView
      style={ styles.scrollView }
    >
      <View
        style={ styles.backdropImgWrapper }
      >
        <Image
          style={ styles.backdropImg }
          source={ { uri: `${API_BACKDROP_IMG}${movie?.backdrop_path}` } }
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
          >{ 9.5 }</Text>
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
            source={ { uri: `${API_POSTER_IMG}${movie?.poster_path}` } }
          />
          <Text
            numberOfLines={ 2 }
            style={ styles.movieDetailsTitle }
          >Spiderman Spiderman Spiderman Spiderman Spiderman Spiderman</Text>
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

      <View
        style={ styles.tabsWrapper }
      >
        <Tabs
          activeTab={ activeTab }
          listTab={ listTab }
          onSelect={ setActiveTab }
        />
      </View>
      
      <View
        style={ styles.tabContentWrapper }
      >
        { activeTab === 'about_movie' ? <MovieDeatilsAbout description={ movie?.overview } /> : '' }
        { activeTab === 'reviews' ? <MovieDeatilsReviews list={ reviews } /> : '' }
        { activeTab === 'cast' ? <MovieDeatilsCast list={ credits.cast } /> : '' }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#242A32',
  },
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
  tabsWrapper: {
    marginTop: 24,
  },
  tabContentWrapper: {
    marginTop: 24,
    marginHorizontal: 24,
  },
});

export default DetailScreen;
