import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  goToDetail: () => void
};

const MoviesList = ({ goToDetail }: Props) => {
  const [list, setList]: any = useState([]);

  const listItem = (item: any) => {
    return (
      <Pressable
        style={ styles.listItem }
        onPress={ goToDetail }
      >
        <View>
          <Image
            style={ styles.listItemImg }
            source={ require("../../assets/movies/movie-1.png") }
          />
        </View>
        
        <View
          style={ styles.listItemInfo }
        >
          <Text
            numberOfLines={ 1 }
            style={ styles.title }
          >Title</Text>

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
              >9.5</Text>
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
              >2019</Text>
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
              >139 minutes</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  }

  useEffect(() => {
    setList(Array(50).fill(''));
  }, []);

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
