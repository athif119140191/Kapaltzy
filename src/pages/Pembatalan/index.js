import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { Card } from '..';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
      modalVisible: false,
    };
  }

  componentDidMount() {
    var data = [
      {
        kode1: 'BKN',
        kode2: 'MRK',
        namaAsal: 'Bakauheni',
        namaTujuan: 'Merak',
        tgl: '2022-3-9',
        id: 1
      },
      {
        kode1: 'BKN',
        kode2: 'TJP',
        namaAsal: 'Bakauheni',
        namaTujuan: 'Tanjung Periuk',
        tgl: '2022-3-9',
        id: 2
      },
      {
        kode1: 'TJP',
        kode2: 'MRK',
        namaAsal: 'Tanjung Periuk',
        namaTujuan: 'Merak',
        tgl: '2022-3-9',
        id: 3
      },
      {
        kode1: 'TJP',
        kode2: 'BKN',
        namaAsal: 'Tanjung Periuk',
        namaTujuan: 'Bakauheni',
        tgl: '2022-3-9',
        id: 4
      },
      {
        kode1: 'MRK',
        kode2: 'BKN',
        namaAsal: 'Merak',
        namaTujuan: 'Bakauheni',
        tgl: '2022-3-9',
        id: 5
      },
      {
        kode1: 'MRK',
        kode2: 'TJP',
        namaAsal: 'Merak',
        namaTujuan: 'Tanjung Periuk',
        tgl: '2022-3-9',
        id: 6
      },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = event => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter(l => l.namaAsal.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{height: 10, width: '100%', backgroundColor: '#e5e5e5'}} />
    );
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    console.disableYellowBox = true;
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="skyblue" />
        <View style={styles.header}>
          <TextInput
            placeholder="Enter Text..."
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.bookContainer}>
                <Card
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                  kode1={item.kode1}
                  kode2={item.kode2}
                  namaAsal={item.namaAsal}
                  namaTujuan={item.namaTujuan}
                  tgl={item.tgl}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
  },
  bookContainer: {
    flexDirection: 'row',
    padding: 5,
  },  
});