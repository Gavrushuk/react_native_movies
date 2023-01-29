import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, ToastAndroid, View } from "react-native";
import config from "../../config";
import MovieDeatilsAbout from "../elements/MovieDetailsAbout";
import MovieDeatilsCast from "../elements/MovieDetailsCast";
import MovieDetailsHero from "../elements/MovieDetailsHero";
import MovieDeatilsReviews from "../elements/MovieDetailsReviews";
import Tabs from "../elements/Tabs";

const DetailScreen = () => {
  const route: any = useRoute();
  const listTab = [
    { title: "About Movie", value: "about_movie" },
    { title: "Reviews", value: "reviews" },
    { title: "Cast", value: "cast" },
  ];
  const [activeTab, setActiveTab] = useState("about_movie");
  const [movie, setMovie] = useState<any>();
  const [reviews, setReviews] = useState<any[]>([]);
  const [credits, setCredits] = useState<any>([]);
  const [pageReviews, setPageReviews] = useState(1);
  const [totalPagesReviews, setTotalPagesReviews] = useState(10);

  const getMovieDetailsById = (id: number) => {
    fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ config.TMDB_API_KEY }&language=en-US`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setMovie(data);
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Get Movie Details Error', ToastAndroid.SHORT);
      });
  };

  const getReviews = (id: number, page: number = 1) => {
    fetch(`https://api.themoviedb.org/3/movie/${ id }/reviews?api_key=${ config.TMDB_API_KEY }&language=en-US&page=${ page }`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          if (page > 1) {
            setReviews([
              ...reviews,
              ...data.results,
            ]);
          } else {
            setReviews(data.results);
          }
          setPageReviews(data.page);
          setTotalPagesReviews(data.total_pages);
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

  const loadMoreReviews = () => {
    const { id } = route.params;

    if (pageReviews < totalPagesReviews) {
      getReviews(id, pageReviews + 1);
    }
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
      { movie ? <MovieDetailsHero movie={ movie } /> : '' }

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
        { activeTab === 'reviews' ?
          <View>
            <MovieDeatilsReviews list={ reviews } />
            { totalPagesReviews > 1 ?
              <Button
                color="#0296E5"
                title="Load more"
                onPress={ loadMoreReviews }
              />
              : ''
            }
          </View>
          : ''
        }
        { activeTab === 'cast' ? <MovieDeatilsCast list={ credits.cast } /> : '' }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#242A32',
  },
  tabsWrapper: {
    marginTop: 24,
  },
  tabContentWrapper: {
    marginTop: 24,
  },
});

export default DetailScreen;
