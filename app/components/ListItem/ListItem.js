import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';

function ListItem({image, title, subTitle}) {
  return (
    <View style={styles.sellerDetailsContainer}>
      <Image style={styles.sellerImage} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sellerDetailsContainer: {
    padding: 20,
    flexDirection: 'row'
  },
  sellerImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  title: {
    fontWeight: '500'
  },
  subTitle: {
    color: colors.medium,
  }
})

export default ListItem;