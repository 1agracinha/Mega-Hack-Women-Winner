import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import logo from '../assets/images/iconT.png';
import Colors from '../constants/Colors';

import { Text, View } from '../components/Themed';

export default function TabBookScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={logo}
          style={{
            width: 330,
            height: 150,
            borderRadius: 22
          }} />

        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor={Colors.light.primary}
          // darkColor={Colors.dark.primary}
          >
            ConectApp te proporsiona conteúdos
            sobre os principais temas relacionados a como abrir
            e manter seus negócios.
          </Text>
          <Text />
          <Text
            style={styles.getStartedText}
            lightColor={Colors.light.primary}
          // darkColor={Colors.dark.primary}
          >
            Temos também um time de apoio composto por pessoas que assim como você,
            querem mudar o mundo com suas ideias.
          </Text>
          <Text />
          <Text
            style={styles.getStartedText}
            lightColor={Colors.light.primary}
          // darkColor={Colors.dark.primary}
          >
            Queremos incentivar o empreendedorismo entre mulheres venha fazer parte dessa corrente.
            Compartilhar conhecimento é só o começo.
        </Text>
          <Text />
          <Text
            style={styles.getStartedText}
            lightColor={Colors.light.primary}
          // darkColor={Colors.dark.primary}
          >
            Compartilhar conhecimento é só o começo.
        </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  getStartedText: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: "left",
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
