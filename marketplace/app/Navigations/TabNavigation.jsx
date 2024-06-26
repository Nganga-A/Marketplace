import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {

    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="home" component={HomeScreen}
                options={{
                    tabBarLabel:({color})=>(
                        <Text style={{color:color,fontsize:10,marginBottom:2}}>Home</Text>
                    ),
                    tabBarIcon:({color,size})=>(
                        <Ionicons name="home" size={size} color={color}/>
                    ),
                }}/>

            <Tab.Screen name="explore" component={ExploreScreen}
                options={{
                    tabBarLabel:({color})=>(
                        <Text style={{color:color,fontsize:10,marginBottom:2}}>Explore</Text>
                    ),
                    tabBarIcon:({color,size})=>(
                        <Ionicons name="search" size={size} color={color}/>
                    ),
                }}/>

            <Tab.Screen name="addpost" component={AddPostScreen}
                options={{
                    tabBarLabel:({color})=>(
                        <Text style={{color:color,fontsize:10,marginBottom:2}}>Add Post</Text>
                    ),
                    tabBarIcon:({color,size})=>(
                        <MaterialCommunityIcons name="camera-plus" size={size} color={color} />
                    ),
                }}/>

            <Tab.Screen name="profile" component={ProfileScreen}
                options={{
                    tabBarLabel:({color})=>(
                        <Text style={{color:color,fontsize:10,marginBottom:2}}>Profile</Text>
                    ),
                    tabBarIcon:({color,size})=>(
                        <Octicons name="person" size={size} color={color} />
                    ),
                }}/>

        </Tab.Navigator>
    )
}