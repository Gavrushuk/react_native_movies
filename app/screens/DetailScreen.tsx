import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MovieDeatilsAbout from "../elements/MovieDetailsAbout";
import MovieDeatilsCast from "../elements/MovieDetailsCast";
import MovieDeatilsReviews from "../elements/MovieDetailsReviews";
import Tabs from "../elements/Tabs";

const DetailScreen = () => {
  const listTab = [
    { title: "About Movie", value: "about_movie" },
    { title: "Reviews", value: "reviews" },
    { title: "Cast", value: "cast" },
  ];

  const [activeTab, setActiveTab] = useState("about_movie");

  return (
    <ScrollView
      style={ styles.scrollView }
    >
      <View
        style={ styles.backdropImgWrapper }
      >
        <Image
          style={ styles.backdropImg }
          source={ require('../../assets/movies/movie-2.png') }
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
            source={ require('../../assets/movies/movie-2.png') }
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
            >2021</Text>
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
            >139 minutes</Text>
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
            >Action</Text>
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
        { activeTab === 'about_movie' ? <MovieDeatilsAbout /> : '' }
        { activeTab === 'reviews' ? <MovieDeatilsReviews list={ Array(10).fill('') } /> : '' }
        { activeTab === 'cast' ? <MovieDeatilsCast list={ Array(10).fill('') } /> : '' }
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
