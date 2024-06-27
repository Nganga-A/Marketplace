import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/HomeScreen/Header.jsx'
import Slider from '../Components/HomeScreen/Slider.jsx'
import { getFirestore, getDocs, collection} from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import Categories from '../Components/HomeScreen/Categories.jsx'

export default function HomeScreen() {

    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getSliders();
        getCategoryList();
    }, [])

    // Fetch sliders for homescreen
    const getSliders = async() => {
        setSliderList([])
        const querySnapshot = await getDocs(collection(db, "Sliders"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, "=>",doc.data());
        setSliderList(sliderList=>[...sliderList,doc.data()]);
        });
    }

    const getCategoryList = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Category"));
            const categories = [];
            querySnapshot.forEach((doc) => {
                console.log("Docs:", doc.data());
                categories.push(doc.data());
            });
            setCategoryList(categories);
        } catch (error) {
            console.error("Error getting documents: ", error);
        }
    };

    return (
        <View className="py-8 px-6">
            <Header/>
            <Slider sliderList={sliderList} />
            <Categories categoryList={categoryList}/>
        </View>
    )
}