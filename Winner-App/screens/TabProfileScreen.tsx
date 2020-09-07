import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import CardMotivation from '../components/CardMotivation';
import { Text, View } from '../components/Themed';

export default function TabProfileScreen() {
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
