import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Modal, TouchableWithoutFeedback,
  Button,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card, ModalCard } from '..';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default class DetailPesanan extends Component {
  constructor() {
    super();
    this.state = {
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

  filterItem = (nama1, nama2, tglHome) => {
    this.setState({
      nama1: nama1,
      nama2: nama2,
      tglHome: tglHome,
    });
    if (nama1 == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      nama1 = nama1.toLowerCase();
      nama2 = nama2.toLowerCase();
      data = data.filter(l => l.namaAsal.toLowerCase().match(nama1) &&
        l.namaTujuan.toLowerCase().match(nama2) &&
        l.tgl.match(tglHome));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{ height: 10, width: '100%', backgroundColor: '#e5e5e5' }} />
    );
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    console.disableYellowBox = true;
    const { modalVisible } = this.state;
    const { nama1, nama2, tglHome } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text>Asal: {nama1}</Text>
        <Text>Tujuan: {nama2}</Text>
        <Text>Tanggal: {tglHome}</Text>
        <Button title='FILTER DATA' onPress={() => this.filterItem(nama1, nama2, tglHome)} />
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal is closed");
          }}
        >
          <TouchableWithoutFeedback onPress={() => {
            this.setModalVisible(!modalVisible);
          }}>
            <View style={{
              flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
              paddingBottom: 250,
            }}>
              <ModalCard
                onPress={() => {
                  this.props.navigation.navigate('DetailPesanan');
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
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
  image: {
    height: 150,
    width: 90,
  },
  dataContainer: {
    padding: 10,
    width: width - 50,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  author: {
    fontSize: 16,
  },
});