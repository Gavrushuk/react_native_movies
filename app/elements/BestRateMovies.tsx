import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, ToastAndroid, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import config from "../../config.js";

type Props = {
  goToDetail: () => void
};

const BestRateMovies = ({ goToDetail }: Props) => {
  const [movies, setMovies] = useState([]);

  const numbers = [
    require("../../assets/numbers/1.png"),
    require("../../assets/numbers/2.png"),
    require("../../assets/numbers/3.png"),
    require("../../assets/numbers/4.png"),
    require("../../assets/numbers/5.png"),
    require("../../assets/numbers/6.png"),
    require("../../assets/numbers/7.png"),
    require("../../assets/numbers/8.png"),
    require("../../assets/numbers/9.png"),
    require("../../assets/numbers/10.png")
  ];

  useEffect(() => {
    getTranding('week');
  }, []);

  const getTranding = (period: 'day' | 'week') => {
    fetch(`https://api.themoviedb.org/3/trending/movie/${ period }?api_key=${ config.TMDB_API_KEY }`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setMovies(data.results.slice(0, 10));
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Get Trending List Error', ToastAndroid.SHORT);
      });
  };

  const BestMovieCard = (movie: any, index: number) => {
    const API_IMG = "https://image.tmdb.org/t/p/w400/";

    return (
      <Pressable
        style={[
          styles.cardWrapper,
          index === 0 && styles.firstCard,
          index === (movies.length - 1) && styles.lastCard
        ]}
        onPress={ goToDetail }
        key={ index }
      >
        <View
          style={ styles.card }
        >
          <Image
            source={ { uri: API_IMG + movie.poster_path } }
            style={ styles.cardImg }
          ></Image>
          <Image
            source={ numbers[index] }
            style={[
              styles.cardNumber,
              index === 0 && styles.firstCardNumber,
              index === (movies.length - 1) && styles.lastCardNumber
            ]}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={ false }
    >
      { movies.map((movie, index) => BestMovieCard(movie, index)) }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  firstCard: {
    marginLeft: 40,
  },
  lastCard: {
    marginRight: 25,
  },
  firstCardNumber: {
    left: -70,
  },
  lastCardNumber: {
    left: -35,
  },
  cardWrapper: {
    marginHorizontal: (30 / 2),
  },
  card: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 140,
    height: 235,
  },
  cardImg: {
    width: 140,
    height: 210,
    borderRadius: 16,
    resizeMode: 'cover',
    objectFit: 'cover',
  },
  cardNumber: {
    position: 'absolute',
    left: -60,
    bottom: 0,
    maxHeight: 80,
    height: 80,
    width: 140,
    resizeMode: 'contain',
    objectFit: 'contain',
  }
});

export default BestRateMovies;
