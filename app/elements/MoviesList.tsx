import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  list: any[],
  goToDetail: () => void
};

const MoviesList = ({ list, goToDetail }: Props) => {
  const API_IMG = "https://image.tmdb.org/t/p/w300/";

  const listItem = (item: any) => {
    return (
      <Pressable
        style={ styles.listItem }
        onPress={ goToDetail }
      >
        <View>
          <Image
            style={ styles.listItemImg }
            source={ { uri: `${API_IMG}${item.poster_path }` } }
          />
        </View>
        
        <View
          style={ styles.listItemInfo }
        >
          <Text
            numberOfLines={ 1 }
            style={ styles.title }
          >{ item.title }</Text>

          <View>
            <View
              style={ styles.listItemInfoLine }
            >
              <Image
                style={ styles.listItemInfoIcon }
                source={ require("../../assets/icons/star.png") }
              />
              <Text
                style={ [styles.listItemInfoText, styles.rateText] }
              >{ item.vote_average }</Text>
            </View>
            <View
              style={ styles.listItemInfoLine }
            >
              <Image
                style={ styles.listItemInfoIcon }
                source={ require("../../assets/icons/ticket.png") }
              />
              <Text
                style={ styles.listItemInfoText }
              >Action</Text>
            </View>
            <View
              style={ styles.listItemInfoLine }
            >
              <Image
                style={ styles.listItemInfoIcon }
                source={ require("../../assets/icons/calendar_blank.png") }
              />
              <Text
                style={ styles.listItemInfoText }
              >{ new Date(item.release_date).getFullYear() }</Text>
            </View>
            <View
              style={ styles.listItemInfoLine }
            >
              <Image
                style={ styles.listItemInfoIcon }
                source={ require("../../assets/icons/clock.png") }
              />
              <Text
                style={ styles.listItemInfoText }
              >{ item.vote_average } minutes</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <View
      style={ styles.container }
    >
      <FlatList
        data={ list }
        renderItem={ ({ item }) => listItem(item) }
        keyExtractor={ ({ item, index }) => index }
        showsVerticalScrollIndicator={ false }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    height: 120,
    marginBottom: 24,
  },
  listItemImg: {
    height: 120,
    width: 95,
    resizeMode: 'cover',
    objectFit: 'cover',
    borderRadius: 16,
  },
  listItemInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  listItemInfoLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  listItemInfoIcon: {
    width: 16,
    height: 16,
  },
  listItemInfoText: {
    color: '#ffffff',
    marginLeft: 4,
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
  rateText: {
    color: '#FF8700',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '600',
  }
});

export default MoviesList;
