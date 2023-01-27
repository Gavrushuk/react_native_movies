import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

type Tab = {
  title: string,
  value: string
};

type Props = {
  activeTab: string,
  listTab: Tab[],
  onSelect: (tab: string) => void
};

const Tabs = ({ activeTab, listTab, onSelect }: Props) => {
  const Tab = (tab: Tab, index: number) => (
    <Pressable
      style={[
        styles.btnTab,
        activeTab === tab.value && styles.btnTabActive,
        index === 0 && styles.firstBtnTab,
        index === (listTab.length - 1) && styles.lastBtnTab
      ]}
      onPress={ () => onSelect(tab.value) }
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

  return (
    <ScrollView
      style={ styles.listTab }
      horizontal
      showsHorizontalScrollIndicator={ false }
    >
      { listTab.map((tab: Tab, index: number) => Tab(tab, index)) }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default Tabs;
