import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image } from 'react-native';

import logo from '../assets/images/iconT.png';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabNetworkScreen from '../screens/TabNetworkScreen';
import TabBookScreen from '../screens/TabBookScreen';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabProfileScreen from '../screens/TabProfileScreen';

import {
  BottomTabParamList,
  TabBookParamList,
  TabNetworkParamList,
  TabProfileParamList,
  TabHomeParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabHome"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon name="home" color={color} />
          ),
          title: 'Inicio',
        }}
      />
      <BottomTab.Screen
        name="TabBook"
        component={TabBookNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <ShareIcon name="book-reader" color={color} />
          ),
          title: 'Conteúdo'
        }}
      />
      <BottomTab.Screen
        name="TabNetwork"
        component={TabNetworkNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="share" color={color} />
          ),
          title: 'Rede'
        }}
      />
      <BottomTab.Screen
        name="TabProfile"
        component={TabProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileIcon name="md-person" color={color} />
          ),
          title: 'Perfil'

        }}
      />

    </BottomTab.Navigator>
  );
}

function HomeIcon(props: { name: string; color: string }) {
  return <Entypo size={24} style={{ marginBottom: -3 }} {...props} />;
}
function TabBarIcon(props: { name: string; color: string }) {
  return <Entypo size={24} style={{ marginBottom: -3 }} {...props} />;
}
function ShareIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={24} style={{ marginBottom: -3 }} {...props} />;
}
function ProfileIcon(props: { name: string; color: string }) {
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabNetworkStack = createStackNavigator<TabNetworkParamList>();

function TabNetworkNavigator() {
  return (
    <TabNetworkStack.Navigator>
      <TabNetworkStack.Screen
        name="TabNetworkScreen"
        component={TabNetworkScreen}
        options={{
          headerTitleAlign: 'center', headerTitle: 'Rede', headerTintColor: '#7368C1',
          headerLeft: () => (
            <Image
              source={logo}
              style={{
                width: 80,
                height: 105,
                borderRadius: 22
              }} />
          )
        }}
      />
    </TabNetworkStack.Navigator>
  );
}

const TabProfileStack = createStackNavigator<TabProfileParamList>();

function TabProfileNavigator() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen
        name="TabProfileScreen"
        component={TabProfileScreen}
        options={{
          headerTitleAlign: 'center', headerTitle: 'Perfil', headerTintColor: '#7368C1',
          headerLeft: () => (
            <Image
              source={logo}
              style={{
                width: 80,
                height: 105,
                borderRadius: 22
              }} />
          )
        }}
      />
    </TabProfileStack.Navigator>
  );
}

const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{
          headerTitleAlign: 'center', headerTitle: '', headerTintColor: '#7368C1',
          headerShown: false,
          headerLeft: () => (
            <Image
              source={logo}
              style={{
                width: 80,
                height: 105,
                borderRadius: 22
              }} />
          )
        }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabBookStack = createStackNavigator<TabBookParamList>();

function TabBookNavigator() {
  return (
    <TabBookStack.Navigator>
      <TabBookStack.Screen
        name="TabBookScreen"
        component={TabBookScreen}
        options={{
          headerTitleAlign: 'center', headerTitle: 'Conteúdo', headerTintColor: '#7368C1',
          headerLeft: () => (
            <Image
              source={logo}
              style={{
                width: 80,
                height: 105,
                borderRadius: 22
              }} />
          )
        }}
      />
    </TabBookStack.Navigator>
  );
}

