import { View,Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { app } from '../../firebaseConfig';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';

export default function AddPostScreen() {

    const db = getFirestore(app);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList();
    }, []);

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
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View className="p-10">
                <Text className='text-[27px] text-center font-bold'>Add New Post</Text>
                <Text className='text-[18px] text-gray-600 mb-5'>Create New Post and Start Selling</Text>
                <Formik
                    initialValues={{ title: '', desc: '', Category: '', address: '', price: '', image: '' }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder='Title'
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values?.title}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Description'
                                onChangeText={handleChange('desc')}
                                onBlur={handleBlur('desc')}
                                value={values?.desc}
                                numberOfLines={5}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Price'
                                onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                                value={values?.price}    
                                keyboardType="number-pad"    
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Address'
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values?.address} 
                            />
                            {/* Category List Dropdown */}
                            <View style={{borderWidth:1, borderRadius:10, marginTop:12, marginBottom:13 }}>
                            <Picker
                                selectedValue={values?.Category}
                                style={styles.input}
                                onValueChange={handleChange('Category')}
                                className
                            >
                                {categoryList&&categoryList.map((item, index) => (
                                    <Picker.Item key={index} 
                                    label={item.name} value={item.name}/>
                                ))}
                            </Picker>
                            </View>

                            <TouchableOpacity onPress={handleSubmit} className='p-4 bg-blue-400 rounded-2xl'>
                                <Text className='text-white text-center text-[16px]'>Submit</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                </Formik>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        paddingTop: 10,
        marginTop:10, marginBottom:10,
        paddingHorizontal: 17,
        fontSize: 17,
        textAlignVertical:'top',
        marginBottom: 10,
    },
});
