import { StyleSheet,Text,View } from "react-native"
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
    return (
        <View className="flex-1 items-center bg-white"> 
            <StatusBar style="auto"/>
            <LoginScreen/>
        </View>
    );
}

