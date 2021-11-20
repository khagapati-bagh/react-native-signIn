import React, {Children} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Search from './Search';
import Chat from './Chat';
import Post from './Post';
import Setting from './Setting';

const Tab = createMaterialBottomTabNavigator();

const CustomTabBarButton = () => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      barStyle={{
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        borderRadius: 15,
        backgroundColor: '#fff',
        height: 90,
        ...styles.shadow,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <View
        //       style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        //       <Image
        //         source={require('../assets/icon/home.png')}
        //         resizeMode="contain"
        //         style={{
        //           width: 25,
        //           height: 25,
        //         }}
        //       />
        //       <Text style={{fontSize: 12}}>HOME</Text>
        //     </View>
        //   ),
        // }}

        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="text-box-search"
              color={color}
              size={26}
            />
          ),
        }}

        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <View
        //       style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        //       <Image
        //         source={require('../assets/icon/find.png')}
        //         resizeMode="contain"
        //         style={{
        //           width: 25,
        //           height: 25,
        //         }}
        //       />
        //       <Text style={{fontSize: 12}}>FIND</Text>
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        // options={{
        //   tabBarIcon: ({foucsed}) => (
        //     <Image
        //       source={require('../assets/icon/plus.png')}
        //       resizeMode="contain"
        //       style={{width: 30, height: 30, tintColor: '#000'}}
        //     />
        //   ),
        //   tabBarButton: props => <CustomTabBarButton {...props} />,
        // }}

        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}

        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <View
        //       style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        //       <Image
        //         source={require('../assets/icon/chat.png')}
        //         resizeMode="contain"
        //         style={{
        //           width: 25,
        //           height: 25,
        //         }}
        //       />
        //       <Text style={{fontSize: 12}}>FIND</Text>
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="content-save-settings"
              color={color}
              size={26}
            />
          ),
        }}

        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <View
        //       style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
        //       <Image
        //         source={require('../assets/icon/settings.png')}
        //         resizeMode="contain"
        //         style={{
        //           width: 25,
        //           height: 25,
        //         }}
        //       />
        //       <Text style={{fontSize: 12}}>FIND</Text>
        //     </View>
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
