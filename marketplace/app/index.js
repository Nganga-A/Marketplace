import { StyleSheet,Text,View } from "react-native"
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <View className="flex items-center justify-center bg-white">
            <Text className="text-[30px]">Lets Go Abed</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

