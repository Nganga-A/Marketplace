import { StyleSheet,Text,View } from "react-native"
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./Screens/LoginScreen";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/clerk-expo"
export default function App() {
    return (
        <ClerkProvider publishableKey="pk_test_YmlnLWxvdXNlLTkzLmNsZXJrLmFjY291bnRzLmRldiQ">
        <View className="flex-1 items-center bg-white"> 
            <StatusBar style="auto"/>
                <SignedIn>
                        <Text>You are Signed in</Text>
                </SignedIn>
                <SignedOut>
                        <LoginScreen/>
                </SignedOut>
        </View>
        </ClerkProvider>
    );
}

