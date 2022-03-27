import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Akun extends Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.parentContainer}>
          <View style={styles.mainContainer}>
          <MaterialCommunityIcons name="account-circle" style={{ marginLeft: 130 }} size={100} color={'skyblue'} />
          <Text style={{ fontWeight:'bold', fontSize: 40,
            color: 'skyblue', textAlign: 'center', }}>Athif Najmudin</Text>
          <View style={{flexDirection:'column', paddingTop: 80, paddingBottom: 100, paddingLeft: 10}}>
          <Text style={styles.languages}>React Native: Beginner</Text>
          <Text style={styles.languages}>React JS       : Beginner</Text>
          <Text style={styles.languages}>Python           : Amateur</Text>
          </View> 
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'skyblue',
    justifyContent: 'space-between',
    flex: 1,
  },
  parentContainer: {
    backgroundColor: 'skyblue',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  mainContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    borderRadius: 15,
  },
  container: {
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    paddingTop: 2,
  },
  languages: {
    fontSize: 20,
    fontWeight: "bold",

  }
})