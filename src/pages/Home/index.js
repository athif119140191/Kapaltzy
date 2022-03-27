import React, { Component } from 'react';
import {
  Text, StyleSheet, View, TouchableOpacity,
  Alert, SafeAreaView, TextInput,
  KeyboardAvoidingView, Button,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { event } from 'react-native-reanimated';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      choosenIndex: 0,
      date: new Date(),
      mode: 'date',
      show: false,
      text: 'Empty',
      asal: "",
      tujuan: "",
    };
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({show: Platform.OS === 'android'});
    this.setState({date: currentDate});

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
    this.setState({text: fDate})

    console.log(fDate);
  }

  showMode = (currentMode) => {
    this.setState({show: true});
    this.setState({mode: currentMode})
  }

  render() {
    const {date} = this.state;
    const {mode} = this.state;
    const {show} = this.state;
    const {text, asal, tujuan} = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.screenContainer}>
          <View style={styles.parentContainer}>
            <View style={styles.mainContainer}>
              <MaterialCommunityIcons name="ferry" style={{ marginLeft: 130 }} size={100} color={'skyblue'} />
              <Text style={styles.judul}>Asal</Text>
              <View style={styles.container}>
                <Picker style={styles.pickerStyle}
                  selectedValue={asal}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({ asal: itemValue, choosenIndex: itemPosition })}
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Bakauheni" value="Bakauheni" />
                  <Picker.Item label="Merak" value="Merak" />
                  <Picker.Item label="Tanjung Periuk" value="Tanjung Periuk" />
                </Picker>
              </View>

              <Text style={styles.judul}>Tujuan</Text>
              <View style={styles.container}>
                <Picker style={styles.pickerStyle}
                  selectedValue={tujuan}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({ tujuan: itemValue, choosenIndex: itemPosition })}
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Merak" value="Merak" />
                  <Picker.Item label="Bakauheni" value="Bakauheni" />
                  <Picker.Item label="Tanjung Periuk" value="Tanjung Periuk" />
                </Picker>
              </View>
              <Text style={styles.judul}>Tanggal</Text>
              <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons
                style={{flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'flex-start'}} 
                name="calendar" 
                size={40} 
                color={'skyblue'}
                onPress={() => this.showMode('date')} 
                />
                <Text style={{fontSize:16, marginLeft:100, marginRight:80}}>{text}</Text>
                <View style={{alignSelf: 'flex-end', alignItems: 'flex-end'}}>
                <MaterialCommunityIcons
                style={{flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'flex-end'}}
                 name="cancel" size={40} 
                 color={'skyblue'}
                 onPress={() => this.setState({date: new Date()})} />
                </View>
                </View>
                
                {show &&(
                  <DateTimePicker
                  testID='dateTimePicker'
                  value={date}
                  mode={mode}
                  display='default'
                  onChange={this.onChange}
                  />
                )}
              </View>
              <Button 
              style={styles.btnSubmit} 
              title="SUBMIT"
              onPress={() => {
              this.props.navigation.navigate('PesanTiket', {
                nama1: asal,
                nama2: tujuan,
                tglHome: this.state.text,
              });
            }}
        />
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapperButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    margin: 0,
  },
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
  judul: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  datepick: {
    margin: 10,
  },
  btnSubmit: {
    padding:20
  }
});