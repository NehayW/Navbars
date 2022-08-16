import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import BottomTab from './BottomTab';
import CustomDrawer from './Drawer';

export function Screen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings</Text>
    </View>
  );
}

const TabBar = ({
  state,
  descriptors,
  navigation,
  containerStyle,
  itemStyle,
  bgColor,
}) => {
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: bgColor},
        containerStyle,
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <BottomTab // Make changes in this component according your need
            key={index}
            label={label}
            onPress={onPress}
            isFocused={isFocused}
            style={itemStyle}
          />
        );
      })}
    </View>
  );
};

const Tab = createBottomTabNavigator();

const CustomTab = ({bgColor}) => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <TabBar
          bgColor={bgColor}
          containerStyle={{}}
          itemStyle={{}}
          {...props}
        />
      )}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Explore"
        component={CustomDrawer}
      />
      <Tab.Screen name="Food" component={Screen} />
      <Tab.Screen name="History" component={Screen} />
      <Tab.Screen name="Cart" component={Screen} />
      <Tab.Screen name="Profile" component={Screen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    elevation: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default CustomTab;
