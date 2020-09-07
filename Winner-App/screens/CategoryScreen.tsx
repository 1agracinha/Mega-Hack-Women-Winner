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
        <View style={{ paddingHorizontal: 20, paddingTop: 30 }} >
          <Text style={styles.title}> Categoria Marketing: </Text>
        </View>

        <View style={[styles.wrapper, styles.back]} >
          <TouchableOpacity onPress={() => { navigation.navigate('DetailCategory') }}>
            <Text style={styles.subtitle}> Marketing Iniciante </Text>

            <Text style={styles.context}>
              As estratégias de marketing são fundamentais para dar
              visibilidade ao seu negócio atraindo novos clientes.
              Encontre aqui materiais sobre marketing de conteúdo, funil de vendas,
              assessoria de comunicação, e-mail marketing e muito mais.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.wrapper, styles.back]} >
          <Text style={styles.subtitle}> Marketing Basico </Text>

          <Text style={styles.context}>
            As estratégias de marketing são fundamentais para dar
            visibilidade ao seu negócio atraindo novos clientes.
            Encontre aqui materiais sobre marketing de conteúdo, funil de vendas,
            assessoria de comunicação, e-mail marketing e muito mais.
          </Text>
        </View>

        <View style={[styles.wrapper, styles.back]} >
          <Text style={styles.subtitle}> Marketing Avançado </Text>

          <Text style={styles.context}>
            As estratégias de marketing são fundamentais para dar
            visibilidade ao seu negócio atraindo novos clientes.
            Encontre aqui materiais sobre marketing de conteúdo, funil de vendas,
            assessoria de comunicação, e-mail marketing e muito mais.
        </Text>
        </View>

        <View style={[styles.wrapper, styles.back]} >
          <Text style={styles.subtitle}> Marketing Master</Text>

          <Text style={styles.context}>
            As estratégias de marketing são fundamentais para dar
            visibilidade ao seu negócio atraindo novos clientes.
            Encontre aqui materiais sobre marketing de conteúdo, funil de vendas,
            assessoria de comunicação, e-mail marketing e muito mais.
        </Text>
        </View>

      </ScrollView >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    shadowColor: '#454545',
    elevation: 4,
    shadowOpacity: 0.50,
    shadowRadius: 1.41,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  bloco: {
    display: "flex",
    flexDirection: 'row',
    padding: 20,
  },
  container: {
    flex: 1,
  },
  back: {
    backgroundColor: '#87aaa7',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: Colors.light.primary,
    fontWeight: 'bold',
    fontFamily: 'Grandstander',
  },
  subtitle: {
    fontSize: 18,
    color: "#f3f3f3",
    fontWeight: '500',
    fontFamily: 'Grandstander',
  },
  context: {
    fontSize: 14,
    color: "#fff",
    fontWeight: '400',
    marginTop: 10,
  },
});


export default CategoryScreen;