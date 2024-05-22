import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ProfileScreen from '../Screens/ProfileScreen';

export default function TabNavigation() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.createBottomTabNavigator>
            <Tab.Screen name="home" component={HomeScreen}/>
            <Tab.Screen name="explore" component={ExploreScreen}/>
            <Tab.Screen name="addpost" component={AddPostScreen}/>
            <Tab.Screen name="profile" component={ProfileScreen}/>
        </Tab.createBottomTabNavigator>
    )
}