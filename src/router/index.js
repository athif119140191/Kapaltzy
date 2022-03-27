import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PesanTiket, DetailPesanan, Pembatalan, Splash, Akun } from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/BottomNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName="Home" >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false ,
        tabBarHideOnKeyboard: true,
        showIcon: true,
        tabBarLabel: 'Home',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="DetailPesanan" component={DetailPesanan} options={{
        headerShown: false ,
        tabBarHideOnKeyboard: true,
        tabBarLabel: 'Pesanan',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cart" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Pembatalan" component={Pembatalan} options={{
        headerShown: false ,
        tabBarHideOnKeyboard: true,
        tabBarLabel: 'Pembatalan',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cancel" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Akun" component={Akun} options={{
        headerShown: false ,
        tabBarHideOnKeyboard: true,
        tabBarLabel: 'Akun',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="PesanTiket" component={PesanTiket} />
      <Stack.Screen name="DetailPesanan" component={DetailPesanan} />
    </Stack.Navigator>

  )
}

export default Router