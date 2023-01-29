import React, { useEffect, useState } from "react";
import { Image, Pressable, ToastAndroid, StyleSheet, View, Button, Text } from "react-native";
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
  const [list, setList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    updateList(activeTab);
  }, [activeTab]);

  const updateList = (tab: string, page: number = 1) => {
    fetch(`https://api.themoviedb.org/3/movie/${ tab }?api_key=${ config.TMDB_API_KEY }&language=en-US&page=${ page }`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          if (page > 1) {
            setList([
              ...list,
              ...data.results,
            ]);
          } else {
            setList(data.results);
          }
          setPage(data.page);
          setTotalPages(data.total_pages);
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Get Movies List Error', ToastAndroid.SHORT);
      });
  };

  const loadMore = () => {
    if (page < totalPages) {
      updateList(activeTab, page + 1);
    }
  };

  const listCardItem = (item: any) => {
    const API_IMG = "https://image.tmdb.org/t/p/w200";

    return (
      <Pressable
        style={ styles.listCardItem }
        onPress={ () => goToDetail(item.id) }
        key={ item.id }
      >
        <View>
          <Image
            style={ styles.listCardItemImg }
            source={
              item.poster_path ?
                { uri: API_IMG + item.poster_path }
                : require('../../assets/images/no_poster.png')
            }
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
          list.map((item: any) => listCardItem(item))
        }
      </View>

      <Button
        color="#0296E5"
        title="Load more"
        onPress={ loadMore }
      />
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
    width: `${(100 / 3) - 4.5}%`,
  },
  listCardItemImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    objectFit: 'cover',
  },
});

export default HomeTabs;
