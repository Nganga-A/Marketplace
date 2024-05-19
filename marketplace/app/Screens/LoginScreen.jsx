import React from 'react'
import { View, Text, Image,TouchableOpacity,StyleSheet } from 'react-native'


export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('./../../assets/images/login.jpg')}
            style={styles.image}
            onLoad={() => console.log('Image loaded')}
            onError={(e) => console.log('Error loading image', e.nativeEvent.error)}
            />
            <View className="p-5 bg-white mt-[-20px] rounded-t-3xl shadow-md">
                <Text className="text-[25px] text-center font-bold">Community Marketplace</Text>
                <Text className="text-[18px] text-slate-500 mt-4">Buy Sell Marketplace where you can sell old items and make real money</Text>
                <TouchableOpacity className="p-4 mt-4 bg-blue-500 rounded-full">
                <Text className="text-white text-center text-[18px]">Get Started </Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        position:'relative',
        zIndex:10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f7f3',
    }
});