import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import logo from '../assets/images/icon.png';
import Colors from '../constants/Colors';

import CardMotivation from '../components/CardMotivation';
import { Text, View } from '../components/Themed';

export default function TabBookScreen() {
  return (
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
          lightColor={Colors.light.tint}
          darkColor={Colors.dark.tint}
        >
          ConectApp te proporsiona conteúdos
          sobre os principais temas relacionados a como abrir
          e manter seus negócios.
          </Text>
        <Text />
        <Text
          style={styles.getStartedText}
          lightColor={Colors.light.tint}
          darkColor={Colors.dark.tint}
        >
          Temos também um time de apoio, composta por pessoas assim como você, empreendedoras
          que querem mudar o mundo com suas ideias
          e compartilhar conhecimento é só o começo.
          </Text>
        <Text />
        <Text
          style={styles.getStartedText}
          lightColor={Colors.light.tint}
          darkColor={Colors.dark.tint}
        >
          Queremos incentivar o empreendedorismo entre mulheres venha fazer parte dessa corrente.
        </Text>
      </View>

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
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  getStartedText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
  },
  getStartedContainer: {
    alignItems: 'flex-start',
    padding: 20,
    marginHorizontal: 20,
    //  backgroundColor: '#f9f9f9',
    // borderColor: "#fff",
    // borderWidth: 2,
    borderRadius: 20,
  },
});
