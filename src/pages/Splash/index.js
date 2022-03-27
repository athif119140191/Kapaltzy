import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('MainApp');
        }, 3000)
    }, [navigation]);

    return (
       <View style={{backgroundColor:"skyblue", width:'100%', height:'100%'}}>
           <MaterialCommunityIcons name="ferry" style={{ flex: 1, marginTop: 180, marginLeft: 150}} size={100} color={'white'} />
           <Text style={{ flex: 1, fontWeight:'bold', fontSize: 50,
            color: 'white', textAlign: 'center', }}>KAPALTZY</Text>
       </View>
    )
}

export default Splash

const styles = StyleSheet.create({
})