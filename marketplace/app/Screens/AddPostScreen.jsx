import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {app} from '../../firebaseConfig'
import { getFirestore, getDocs, collection } from "firebase/firestore";


export default function AddPostScreen() {

    const db = getFirestore(app);
    
    useEffect(()=> {
        getCategoryList();
    },[]);

    const getCategoryList = async() => {
        const querySnapshot = await getDocs(collection(db, "category"));
        querySnapshot.forEach((doc) => {
            console.log("Docs:",doc.data());
        })
    }

    return (
        <View>
            <Text>AddPostScreen</Text>
        </View>
    )
}