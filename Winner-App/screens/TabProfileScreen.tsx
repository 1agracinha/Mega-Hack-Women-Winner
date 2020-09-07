import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, Modal, Alert, TouchableOpacity } from 'react-native';

import gif from '../assets/images/contruir.gif'
import CardMotivation from '../components/CardMotivation';
import { Text, View } from '../components/Themed';

export default function TabProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }} />
      </View>
      <Text style={styles.title}>Malu Countinho</Text>
      <View style={styles.getStartedContainer}>
        <Text>
          “Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.”
          Mahatma Gandhi.
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.openButton, { marginTop: 20, backgroundColor: "#597878", borderColor: "#ddd", borderWidth: 2, }]}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={[styles.subtitle, { color: "#fff", fontSize: 18 }]}> Saiba mais</Text>
      </TouchableOpacity>

      {/* Modal de construção */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 30 }} >
          <Text style={[styles.subtitle, { color: "#666", textAlign: 'center' }]}>
            Estamos trabalhando em mais funcionalidades...
          </Text>

          <Image
            source={gif}
            style={{
              width: "60%",
              height: "60%",
            }} />

          <Text style={[styles.subtitle, { color: "#666", textAlign: "center" }]}>
            Para mais informações entre em contato por email:
          </Text>

          <Text style={[styles.title]}>
            hackwomen.2020@gmail.com
          </Text>

          <TouchableOpacity
            style={[styles.openButton, { backgroundColor: "#888" }]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={[styles.subtitle, { color: '#fff' }]}>Voltar</Text>
          </TouchableOpacity>

        </View>


      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
    color: '#7368C1',
    fontWeight: 'bold',
    fontFamily: 'Grandstander'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Grandstander',
    color: "#666",
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  openButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 2
  },
  profile: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    borderRadius: 55,
    backgroundColor: '#7368C1'
  },
  getStartedContainer: {
    alignItems: 'flex-start',
    padding: 25,
    marginHorizontal: 20,
    backgroundColor: '#f3f4fa',
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 20,

  },
});
