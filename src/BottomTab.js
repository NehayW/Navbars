import React from 'react';

import {View, Pressable, StyleSheet, Text, Image} from 'react-native';

const getIcon = name => {
  // Change Inactive icons here
  switch (name) {
    case 'Explore':
      return require('../src/assets/explore.png');
    case 'Food':
      return require('../src/assets/food.png');
    case 'History':
      return require('../src/assets/history.png');
    case 'Cart':
      return require('../src/assets/cart.png');
    case 'Profile':
      return require('../src/assets/profile.png');
    default:
      return require('../src/assets/explore.png');
  }
};

const getFocusIcon = name => {
  // Change active icons here
  switch (name) {
    case 'Explore':
      return require('../src/assets/explorewhite.png');
    case 'Food':
      return require('../src/assets/foodwhite.png');
    case 'History':
      return require('../src/assets/historywhite.png');
    case 'Cart':
      return require('../src/assets/cartwhite.png');
    case 'Profile':
      return require('../src/assets/profilewhite.png');
    default:
      return require('../src/assets/explorewhite.png');
  }
};

const BottomTab = ({isFocused, label, onPress, style}) => {
  return (
    <View style={[styles.mainItemContainer, style]}>
      <Pressable style={{alignItems: 'center'}} onPress={onPress}>
        <Image
          source={isFocused ? getFocusIcon(label) : getIcon(label)}
          style={{height: 25, width: 25}}
        />
        {isFocused && (
          <Text style={{paddingTop: 5, color: 'white'}}>{label}</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainItemContainer: {
    marginVertical: 10,
  },
});

export default BottomTab;
