import { StyleSheet,Text,View } from "react-native"
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./Screens/LoginScreen";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/clerk-expo"
// import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigations/TabNavigation";

export default function App() {
    return (
        <ClerkProvider publishableKey="pk_test_YmlnLWxvdXNlLTkzLmNsZXJrLmFjY291bnRzLmRldiQ">
            <View className="flex-1 bg-white"> 
                <StatusBar style="auto"/>
                    <SignedIn>
                        {/* <NavigationContainer> */}
                            <TabNavigation/>
                        {/* </NavigationContainer> */}
                    </SignedIn>
                    <SignedOut>
                        <LoginScreen/>
                    </SignedOut>
            </View>
        </ClerkProvider>

    );
}

