import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from "react-native";


type Props = {
  imgSource: ImageSource
};

export const ImageViewer = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text>ImageViewer</Text>
    </View>
  );
};

type Styles = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {},
});
