import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Root'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const TabNetworkScreen: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: '1',
      name: "Fernanda Gentil",
      image: "https://pikwizard.com/photos/woman-using-mobile-phone-near-window--df39295d5760bd890dd836aa616eea56-m.jpg",
      bio: "Eu sou a Patrícia me formei na faculdade de Comunicação Social da PUC-RS em 1998. Começei a trabalhar na TV Bandeirantes Rio Grande do Sul cobrindo férias de repórteres e,  posteriormente, apresentando telejornal na hora do almoço. Minha trajetòria é longa e acredito que posso contribuir muito em assuntos de comunicação."
    },
    {
      key: '2',
      name: "Fátima Bernades",
      image: "https://pikwizard.com/photos/woman-reading-newspaper-at-counter--abc05ecfd28ec224d5db0525db60a0da-m.jpg",
      bio: "Eu sou a Patrícia me formei na faculdade de Comunicação Social da PUC-RS em 1998. Começei a trabalhar na TV Bandeirantes Rio Grande do Sul cobrindo férias de repórteres e,  posteriormente, apresentando telejornal na hora do almoço. Minha trajetòria é longa e acredito que posso contribuir muito em assuntos de comunicação."
    },
    {
      key: '3',
      name: "Sandra Anennberg",
      image: "https://pikwizard.com/photos/woman-having-cup-of-coffee-at-caf%C3%A3%C2%A9--9c6db970b0999285faf5d95c231b3461-m.jpg",
      bio: "Eu sou a Patrícia me formei na faculdade de Comunicação Social da PUC-RS em 1998. Começei a trabalhar na TV Bandeirantes Rio Grande do Sul cobrindo férias de repórteres e,  posteriormente, apresentando telejornal na hora do almoço. Minha trajetòria é longa e acredito que posso contribuir muito em assuntos de comunicação."
    },
    {
      key: '4',
      name: "Maju Countinho",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "Eu sou a Patrícia me formei na faculdade de Comunicação Social da PUC-RS em 1998. Começei a trabalhar na TV Bandeirantes Rio Grande do Sul cobrindo férias de repórteres e,  posteriormente, apresentando telejornal na hora do almoço. Minha trajetòria é longa e acredito que posso contribuir muito em assuntos de comunicação."
    },
  ])
  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={{ paddingHorizontal: 20, paddingTop: 25 }} >
          <Text style={[styles.title, { textAlign: 'center', fontSize: 18, textTransform: 'uppercase' }]}> Essa é nossa rede </Text>
        </View>

        {data.map((person) => (
          <View style={[styles.wrapper, styles.back]} key={person.key}>

            <View style={[styles.row]}>
              <View style={styles.profile}>
                <Image
                  source={{
                    uri: person.image,
                  }}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 22
                  }} />
              </View>
              <Text style={styles.title}> {person.name} </Text>
              <TouchableOpacity onPress={() => { navigation.navigate('DetailCategory') }}>
                <View style={styles.add}>
                  <Text style={styles.buttonText}> + </Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.context}>
              {person.bio}
            </Text>

          </View>
        ))}

      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd'
  },
  add: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    marginBottom: 8,
    shadowColor: '#454545',
    elevation: 2,
    marginHorizontal: 20,
    shadowOpacity: 0.50,
    shadowRadius: 1.41,
    shadowOffset: {
      height: 2,
      width: 2,
    }
  },
  back: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 22,
    marginTop: 15,
    height: 190,
  },
  row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
  },
  title: {
    fontSize: 20,
    color: Colors.light.primary,
    fontWeight: 'bold',
    fontFamily: 'Grandstander',
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'Grandstander',
  },
  context: {
    fontSize: 14,
    color: "#999",
    fontWeight: '400',
    marginTop: 10,
    maxHeight: 85,
  },
});

export default TabNetworkScreen