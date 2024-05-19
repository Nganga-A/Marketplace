import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

export default function LoginScreen() {
    return (
        <View>
            <Image source={require('./../../assets/images/login.jpg')}
            className="w-full h-[400px] object-cover"/>
            <View className="p-5">
                <Text className="text-[25px] font-bold">Community Marketplace</Text>
                <Text className="text-[18px] text-slate-500 mt-4">Buy Sell Marketplace where you can sell old items and make real money</Text>
            </View>
            <View className="p-4 bg-blue-500 rounded-full">
                <Text className="text-white text-center">Get Started </Text>
            </View>
        </View>
    )
}