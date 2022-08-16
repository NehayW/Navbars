import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Screen} from '../src/TabBar';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  // Change component design according to need
  const navigation = useNavigation();

  const navigateTo = key => {
    props.navigation.closeDrawer();
    navigation.navigate(key);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigateTo('Profile');
          }}>
          <Image
            source={require('./assets/profile.png')}
            style={styles.profileImg}
          />
          <Text style={styles.profileTxt}>Ramesh Sharma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateTo('Explore');
          }}
          style={styles.itemContainer}>
          <Image
            source={require('./assets/explore.png')}
            style={styles.itemImg}
          />
          <Text style={styles.itemText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateTo('Food');
          }}
          style={styles.itemContainer}>
          <Image source={require('./assets/food.png')} style={styles.itemImg} />
          <Text style={styles.itemText}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateTo('History');
          }}
          style={styles.itemContainer}>
          <Image
            source={require('./assets/history.png')}
            style={styles.itemImg}
          />
          <Text style={styles.itemText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateTo('Cart');
          }}
          style={styles.itemContainer}>
          <Image source={require('./assets/cart.png')} style={styles.itemImg} />
          <Text style={styles.itemText}>Cart</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function CustomDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={Screen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {flex: 1, padding: 30},
  profileImg: {height: 150, width: 150, alignSelf: 'center'},
  profileTxt: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemImg: {height: 25, width: 25},
  itemText: {fontSize: 20, paddingLeft: 20, fontWeight: '600'},
});
