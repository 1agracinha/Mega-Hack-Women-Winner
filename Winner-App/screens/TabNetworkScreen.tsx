import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
      tags: ["Comunicação"],
      name: "Fernanda Gentily",
      image: "https://pikwizard.com/photos/woman-using-mobile-phone-near-window--df39295d5760bd890dd836aa616eea56-m.jpg",
      bio: "Eu sou a Gentily me formei na faculdade de Comunicação Social da PUC-RS em 1998. Começei a trabalhar na TV Gazeta Rio Grande do Sul cobrindo férias de repórteres e,  posteriormente, apresentando telejornal na hora do almoço. Minha trajetòria é longa e acredito que posso contribuir muito em assuntos de comunicação."
    },
    {
      key: '2',
      tags: ["Formalização"],
      name: "Fátima Bernadete",
      image: "https://pikwizard.com/photos/woman-reading-newspaper-at-counter--abc05ecfd28ec224d5db0525db60a0da-m.jpg",
      bio: "Eu sou a Fátima me formei na faculdade de Administração da PUC-SP em 2020. Começei a trabalhar na TV Bandeirantes. Minha trajetòria é longa e acredito que posso contribuir muito em assuntos administrativo."
    },
    {
      key: '3',
      tags: ["Marketing", "Formalização"],
      name: "Sam Anennberg",
      image: "https://pikwizard.com/photos/woman-having-cup-of-coffee-at-caf%C3%A3%C2%A9--9c6db970b0999285faf5d95c231b3461-m.jpg",
      bio: "Eu sou a Sam me formei na faculdade de Publicidade e Propagando da IFBA em 2003. Começei a trabalhar na TV Bandeirantes Baiana. Minha trajetòria é longa e acredito que posso contribuir muito em assuntos de publicidade."
    },
    {
      key: '4',
      tags: ["Tecnologia"],
      name: "Malu Countinho",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "Eu sou a Malu me formei na faculdade de Sistemas de Informação da UFES-ES em 2008. Gsoto muito de criar aplicações para auxiliar as pessoa no dia a dia. Minha trajetòria é longa e acredito que posso contribuir muito em assuntos de tecnologia."
    },
  ])
  const [modalVisible, setModalVisible] = useState(false);

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
                    width: 48,
                    height: 48,
                    borderRadius: 22,
                  }} />
              </View>

              <View style={{ marginLeft: 5, backgroundColor: '#ffff' }}>
                <Text style={styles.title}> {person.name} </Text>
                <View style={[{ flexDirection: 'row', backgroundColor: '#ffff' }]}>
                  {person.tags.map((tag) => (
                    <Text key={tag} style={[styles.tag, { backgroundColor: '#e2ddee', marginRight: 5, marginTop: 2, padding: 1 }]}> {tag} </Text>
                  ))}
                </View>

              </View>

              <TouchableOpacity style={styles.touchArea} onPress={() => setModalVisible(true)}>
                <View style={styles.add}>
                  <Ionicons size={40} name="ios-add-circle" color="#597878" />
                </View>

              </TouchableOpacity>
            </View>

            <Text style={styles.context}>
              {person.bio}
            </Text>

          </View>
        ))}

        {/* Modal com detalhamento */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("detalhes foram fechados.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={[styles.back, { padding: 0, height: 150 }]} >

                <View style={{ backgroundColor: '#ffff' }}>
                  <Text style={[styles.title, { textAlign: 'center' }]}> Fernanda Gentilly </Text>
                </View>

                <Text style={[styles.context, { textAlign: 'center', fontSize: 18 }]}>
                  Eu sou a Gentily me formei na faculdade de Comunicação Social da PUC-RS em 1998.
                  Começei a trabalhar na TV Gazeta Rio Grande do Sul cobrindo férias de repórteres e,
                  posteriormente, apresentando telejornal na hora do almoço.
                  Minha trajetòria é longa e acredito que posso contribuir muito em assuntos de comunicação.
                </Text>

              </View>

              <View style={styles.rowmodal}>
                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: "#888" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: "#597878" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    Alert.alert("Solicitação", "Mensagem de solicitação de contato enviada com sucesso. Aguarde que já entraremos em contato.");
                  }}
                >
                  <Text style={styles.textStyle}>Enviar mensagem</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
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
    width: 48,
    height: 48,
    borderRadius: 20,
    backgroundColor: '#ddd'
  },
  add: {
    width: 48,
    height: 48,
    borderRadius: 24,
    // backgroundColor: '#A596f4',
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  },
  touchArea: {
    backgroundColor: 'transparent',
    width: 48,
    height: 48,
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
    color: "#A596f4",
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
  tag: {
    borderRadius: 20,
    color: '#666',
    fontSize: 12,
    paddingHorizontal: 4,
  },
  // modal content
  rowmodal: {
    flexDirection: 'row',
    backgroundColor: "white",
    justifyContent: 'space-evenly'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,.7)',
    // marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    // marginBottom: 15,
    textAlign: "center"
  }
});

export default TabNetworkScreen