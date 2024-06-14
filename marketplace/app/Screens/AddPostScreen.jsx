import { View,Image, Text, StyleSheet, TouchableOpacity ,ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React, { useEffect, useState } from 'react';
import { app } from '../../firebaseConfig';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import {getStorage, ref, uploadBytes} from 'firebase/storage';

export default function AddPostScreen() {

    const db = getFirestore(app);
    const [categoryList, setCategoryList] = useState([]);
    const [image, setImage] = useState(null);
    const storage = getStorage();
    
    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Category"));
            const categories = [];
            querySnapshot.forEach((doc) => {
                // console.log("Docs:", doc.data());
                categories.push(doc.data());
            });
            setCategoryList(categories);
        } catch (error) {
            console.error("Error getting documents: ", error);
        }
    };
    
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
        });

        if (!result.canceled) {
        // Update image state
        setImage(result.assets[0].uri);
        // Set image field value in Formik
        setFieldValue('image', result.assets[0].uri); // Ensure you have setFieldValue from Formik props
    
        }
    };

    const onSubmitMethod=async(value) => {
        value.image=image;        
        //Convert Uri to Blob File
        const resp = await fetch(image);
        const blob = await resp.blob();
        const storageRef = ref(storage, 'communityPost/'+Date.now()+'.jpg');

        uploadBytes(storageRef, blob).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        desc: Yup.string().required('Description is required'),
        price: Yup.number().required('Price is required').positive('Price must be positive'),
        address: Yup.string().required('Address is required'),
        category: Yup.string().required('Category is required'),
        image: Yup.string().required('Image is required'),
    });

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {/* Prevent keyboard hiding active input element */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            ></KeyboardAvoidingView>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="p-5 pl-10 pr-10 ">
                <Text className='text-[27px] text-center font-bold'>Add New Post</Text>
                <Text className='text-[18px] text-gray-600 mb-5'>Create New Post and Start Selling</Text>
                <Formik
                    initialValues={{ title: '', desc: '', category: categoryList.length > 0 ? categoryList[0].name : '', address: '', price: '', image: '' }}
                    onSubmit={onSubmitMethod}
                    enableReinitialize
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values,setFieldValue, touched, errors }) => (
                        <View>
                            <TouchableOpacity onPress={pickImage}>
                                <Image source={image ? { uri: image } : require('../../assets/images/imagePlaceholder.png')}
                                    style={{ width: 280, height: 90, borderRadius: 5 }} />
                            </TouchableOpacity>
                            {touched.image && errors.image && <Text style={styles.errorText}>{errors.image}</Text>}

                            <TextInput
                                style={styles.input}
                                placeholder='Title'
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values?.title}
                            />
                            {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

                            <TextInput
                                style={styles.input}
                                placeholder='Description'
                                onChangeText={handleChange('desc')}
                                onBlur={handleBlur('desc')}
                                value={values?.desc}
                                numberOfLines={5}
                            />
                            {touched.desc && errors.desc && <Text style={styles.errorText}>{errors.desc}</Text>}


                            <TextInput
                                style={styles.input}
                                placeholder='Price'
                                onChangeText={handleChange('price')}
                                onBlur={handleBlur('price')}
                                value={values?.price}    
                                keyboardType="number-pad"    
                            />
                            {touched.price && errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

                            <TextInput
                                style={styles.input}
                                placeholder='Address'
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values?.address} 
                            />
                            {touched.address && errors.address && <Text style={styles.errorText}>{errors.address}</Text>}

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
            </ScrollView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        marginTop:5, marginBottom:5,
        paddingHorizontal: 17,
        fontSize: 17,
        textAlignVertical:'top',
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginTop: -5,
        marginBottom: 4,
    }
});
