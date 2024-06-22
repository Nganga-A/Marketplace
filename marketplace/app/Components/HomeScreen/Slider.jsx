import { View, Text, FlatList, Image  } from 'react-native';
import React from 'react'

export default function Slider({sliderList}) {

    return (
        <View className="mt-5">
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index})=>(
                    <View key={index}>  
                        <Image source={{ uri: item?.image }}
                            className="h-[180px] w-[280px] mr-3 rounded-lg object-contain"
                        />
                    </View>
                )}
            />
        </View>
    )
}
