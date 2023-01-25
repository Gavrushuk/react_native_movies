import React, { useEffect, useState } from "react";
import { Image, Pressable, ToastAndroid, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import config from "../../config.js";

type Tab = {
  title: string,
  value: string
};

type Props = {
  goToDetail: () => void
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

  const ListTabItem = (tab: Tab, index: number) => (
    <Pressable
      style={[
        styles.btnTab,
        activeTab === tab.value && styles.btnTabActive,
        index === 0 && styles.firstBtnTab,
        index === (listTab.length - 1) && styles.lastBtnTab
      ]}
      onPress={ () => setActiveTab(tab.value) }
      key={ index }
    >
      <Text
        style={[
          styles.tabText,
          activeTab === tab.value && styles.tabTextActive
        ]}
      >{ tab.title }</Text>
    </Pressable>
  );

  const listCardItem = (item: any, index: number) => {
    const API_IMG = "https://image.tmdb.org/t/p/w300/";

    return (
      <Pressable
        style={ styles.listCardItem }
        onPress={ goToDetail }
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
      <ScrollView
        style={ styles.listTab }
        horizontal
        showsHorizontalScrollIndicator={ false }
      >
        { listTab.map((tab: Tab, index: number) => ListTabItem(tab, index)) }
      </ScrollView>

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
  listTab: {
    display: 'flex',
    flexDirection: 'row',
  },
  firstBtnTab: {
    marginLeft: 25,
  },
  lastBtnTab: {
    marginRight: 25,
  },
  btnTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
    marginHorizontal: 6,
    paddingBottom: 10,
    width: 88,
  },
  btnTabActive: {
    borderBottomColor: '#3A3F47',
  },
  tabText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#ffffff',
  },
  tabTextActive: {
    fontWeight: '500',
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
    marginHorizontal: 7,
    marginVertical: 9,
    borderRadius: 16,
    overflow: 'hidden',
    height: 145,
    width: `${88 / 3}%`,
  },
  listCardItemImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    objectFit: 'cover',
  }
});

export default HomeTabs;
