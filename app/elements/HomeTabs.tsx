import React, { useEffect, useState } from "react";
import { Image, Pressable, ToastAndroid, StyleSheet, View } from "react-native";
import config from "../../config.js";
import Tabs from "./Tabs";

type Tab = {
  title: string,
  value: string
};

type Props = {
  goToDetail: (id: number) => void
};

const HomeTabs = ({ goToDetail }: Props) => {
  const listTab = [
    { title: "Now playing", value: "now_playing" },
    { title: "Upcoming", value: "upcoming" },
    { title: "Top rated", value: "top_rated" },
    { title: "Popular", value: "popular" },
  ];

  const [activeTab, setActiveTab] = useState("now_playing");

  const [list, setList] = useState([]);

  useEffect(() => {
    updateList(activeTab);
  }, [activeTab]);

  const updateList = (tab: string) => {
    fetch(`https://api.themoviedb.org/3/movie/${ tab }?api_key=${ config.TMDB_API_KEY }&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setList(data.results);
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Get Movies List Error', ToastAndroid.SHORT);
      });
  };

  const listCardItem = (item: any, index: number) => {
    const API_IMG = "https://image.tmdb.org/t/p/w300";

    return (
      <Pressable
        style={ styles.listCardItem }
        onPress={ () => goToDetail(item.id) }
        key={ index }
      >
        <View>
          <Image
            style={ styles.listCardItemImg }
            source={ { uri: API_IMG + item.poster_path } }
          />
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={ styles.container }
    >
      <Tabs
        activeTab={ activeTab }
        listTab={ listTab }
        onSelect={ setActiveTab }
      />

      <View
        style={ styles.listCard }
      >
        {
          list.map((item: any, index: number) => listCardItem(item, index))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  listCard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  listCardItem: {
    marginHorizontal: '2%',
    marginVertical: '4%',
    borderRadius: 16,
    overflow: 'hidden',
    height: 145,
    width: `${(100 / 3) - 4}%`,
  },
  listCardItemImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    objectFit: 'cover',
  }
});

export default HomeTabs;
