import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';
import ListItem from '../ListItem/ListItem';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require('../../assets/mosh.jpg')}
          title='Mosh Hamedani'
          subTitle='5 Listings'
          >
        </ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40,
  }
})

export default ListingDetailsScreen;