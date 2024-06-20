import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser  } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
    const {user} = useUser();
    return (
        <View>
            {/* {User Info */}
            <View className="flex flex-row items-center gap-2"> 
                <Image source={{uri:user?.imageUrl}} className="rounded-full w-11 h-11"/>
                <View>
                    <Text className="text-[17px]">Welcome</Text>
                    <Text className="text-[18px] font-bold">{user?.fullName}</Text>
                </View>
            </View>

            {/* {Search Bar} */}
            <View className='p-3 px-5 mt-5 bg-white rounded-full flex flex-row items-center border-[1px] border-blue-200'>
                <Ionicons name="search" size={24} color="gray" />
                <TextInput className="ml-3 text-[16px]" placeholder='Search' 
                    onChangeText={(value) => console.log(value)}/>
            </View>
        </View>
    )
}