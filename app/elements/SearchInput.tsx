import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SearchInput = () => {
  const route: any = useRoute();

  let SearchTextInputRef: TextInput;

  useEffect(() => {
    if (route.params?.isAutoFocused) {
      setTimeout(() => {
        SearchTextInputRef?.focus();
      }, 100)
    }
  }, [route.params]);

  return (
    <View style={ styles.SectionStyle }>
      <TextInput
        style={ styles.TextInputStyle }
        placeholderTextColor={ '#67686D' }
        placeholder="Search"
        underlineColorAndroid="transparent"
        ref={(input: TextInput) => { SearchTextInputRef = input; }}
      />

      <Image
        source={ require("../../assets/search_icon.png") }
        style={ styles.ImageStyle }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A3F47',
    height: 42,
    borderRadius: 16,
    paddingLeft: 18,
    paddingRight: 8
  },

  TextInputStyle: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#FFFFFF'
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    width: 16,
    height: 16,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default SearchInput;
