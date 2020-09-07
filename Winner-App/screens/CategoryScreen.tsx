import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Root'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const CategoryScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <View style={{ paddingHorizontal: 20, paddingTop: 30 }} >
          <Text style={styles.title}> Marketing : </Text>
        </View> */}

        <View style={[styles.back]} >
          <TouchableOpacity onPress={() => { navigation.navigate('DetailCategory') }}>
            <Text style={styles.subtitle}> Marketing Iniciante </Text>

            <Text style={styles.context}>
              As estratégias de marketing são fundamentais para dar
              visibilidade ao seu negócio atraindo novos clientes.
            
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.back]} >
          <Text style={styles.subtitle}> Marketing Basico </Text>

          <Text style={styles.context}>
            As estratégias de marketing são fundamentais para dar
            visibilidade ao seu negócio atraindo novos clientes.

          </Text>
        </View>

        <View style={[styles.back]} >
          <Text style={styles.subtitle}> Marketing Avançado </Text>

          <Text style={styles.context}>
            As estratégias de marketing são fundamentais para dar
            visibilidade ao seu negócio atraindo novos clientes.

        </Text>
        </View>

        <View style={[styles.back]} >
          <Text style={styles.subtitle}> Marketing Master</Text>

          <Text style={styles.context}>
            As estratégias de marketing são fundamentais para dar
            visibilidade ao seu negócio atraindo novos clientes.

        </Text>
        </View>

      </ScrollView >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    backgroundColor: '#d9e5f2',
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#87aaa7",
    padding: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.light.primary,
    fontWeight: 'bold',
    fontFamily: 'Grandstander',
  },
  subtitle: {
    fontSize: 24,
    color: Colors.light.primary,
    fontWeight: '600',
    fontFamily: 'Grandstander',
    textAlign: 'center',
  },
  context: {
    fontSize: 14,
    color: Colors.light.primary,
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    lineHeight: 23,
  },
});


export default CategoryScreen;