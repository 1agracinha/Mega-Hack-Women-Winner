import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors'


const data = [
  { key: 'bigBlock' },
  { key: 'blockB' },
  { key: 'blockC' },
  { key: 'blockD' },
];

const renderItem = () => (
  <>
    <View style={[styles.wrapper]} >
      <Text style={styles.title}>Topico 1</Text>

    </View>
    <View>
      <Text style={styles.title}>Topico 1</Text>
      <Text style={styles.title}>Topico 1</Text>
      <View style={styles.barra} />
    </View>
    {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
  </>
)

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.wrapper2]} >
          <Text style={styles.title}>Bem-vinda a Winner!</Text>
          <View style={styles.barra} />
          <Text style={styles.context}>Vamos fazer o que fazemos de melhor, compartilhar conhecimento.</Text>
          {/* <View style={styles.barra} /> */}
        </View>

        <View style={{ paddingHorizontal: 20, paddingTop: 30 }} >
          <Text style={styles.title}>Principais Assuntos: </Text>
        </View>

        <View style={[styles.wrapper, styles.back]} >
          <Text style={styles.subtitle}>Finanças </Text>

          <Text style={styles.context}>
            O que se trata esse topico afinal, resumo da importancia de se
            conhecer mais sobre o assunto. Diga aqui o que for mais relevante.
        </Text>
        </View>

        <View style={[styles.bloco]} >
          <View style={styles.bigCardView} >
            <Text style={styles.title}>Minhas finanças não estão indo bem.</Text>
            <View style={styles.barra} />
            <Text style={styles.context}>
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
          </Text>

          </View>
          <View style={styles.smallCardView} >

            <View style={styles.smallCard}>
              <Text style={styles.context}>Matemática</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.context}>Calcule seus gastos</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.context}> Mais . . .</Text>
              <View style={styles.barra} />
            </View>

          </View>
        </View>
        <View style={styles.barra2} />

        <View style={[styles.back, { backgroundColor: '#f0e1db' }]} >
          <Text style={styles.subtitle}>Tecnologia </Text>

          <Text style={styles.context}>
            O que se trata esse topico afinal, resumo da importancia de se
            conhecer mais sobre o assunto. Diga aqui o que for mais relevante.
        </Text>
        </View>

        <View style={[styles.bloco]} >
          <View style={styles.bigCardView} >
            <Text style={styles.title}>Topico 1</Text>
            <View style={styles.barra} />
          </View>
          <View style={styles.smallCardView} >

            <View style={styles.smallCard}>
              <Text style={styles.title}>Topico 1</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.title}>Topico 1</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.title}>Topico 1</Text>
              <View style={styles.barra} />
            </View>

          </View>
        </View>
        <View style={styles.barra2} />


        <View style={[styles.back, { backgroundColor: '#e2ddee' }]} >
          <Text style={styles.subtitle}> Loja Virtual </Text>

          <Text style={[styles.context]}>
            O que se trata esse topico afinal, resumo da importancia de se
            conhecer mais sobre o assunto. Diga aqui o que for mais relevante.
        </Text>
        </View>

        <View style={[styles.bloco]} >
          <View style={styles.bigCardView} >
            <Text style={styles.title}>Topico 1</Text>
            <View style={styles.barra} />
          </View>
          <View style={styles.smallCardView} >

            <View style={styles.smallCard}>
              <Text style={styles.title}>Topico 1</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.title}>Topico 1</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={{}}>mais</Text>
              <Text style={{}}>-></Text>

              <View style={styles.barra} />
            </View>

          </View>
        </View>
        <View style={styles.barra2} />


        <View style={[styles.back, , { backgroundColor: '#f0ecdb' }]} >
          <Text style={styles.subtitle}>Contabilidade </Text>

          <Text style={[styles.context]}>
            O que se trata esse topico afinal, resumo da importancia de se
            conhecer mais sobre o assunto. Diga aqui o que for mais relevante.
        </Text>
        </View>

        <View style={[styles.bloco]} >
          <View style={styles.bigCardView} >
            <Text style={styles.title}>Topico 1</Text>
            <View style={styles.barra} />
          </View>
          <View style={styles.smallCardView} >

            <View style={styles.smallCard}>
              <Text style={styles.title}>Topico 1</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.title}>Topico 1</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.title}>Topico 1</Text>
              <View style={styles.barra} />
            </View>

          </View>
        </View>
        <View style={styles.barra2} />


        <View style={{ padding: 20 }} >
          <Text style={styles.title}>
            Para mais topicos
          </Text>
          <View style={styles.barra} />
        </View>
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />

      </ScrollView >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    shadowColor: '#743c7a',
    elevation: 4,
    shadowOpacity: 0.50,
    shadowRadius: 1.41,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  wrapper2: {
    borderColor: '#F2EFEB',
    borderWidth: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  bloco: {
    display: "flex",
    flexDirection: 'row',
    padding: 20,
  },
  bigCardView: {
    display: "flex",
    flexDirection: 'column',
    width: '70%',
    backgroundColor: "#fff",
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 20,
    maxHeight: 250,
    padding: 20,
  },
  smallCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    height: 60,
  },
  smallCardView: {
    display: "flex",
    flexDirection: 'column',
    width: '25%',
  },
  barra: {
    marginVertical: 5,
    width: 55,
    height: 5,
    backgroundColor: Colors.dark.gray,
    borderRadius: 3,
  },
  barra2: {
    //marginVertical: 10,
    width: '80%',
    height: 2.5,
    backgroundColor: '#e2ddee',
    borderRadius: 3,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
  },
  back: {
    backgroundColor: '#d9e5f2',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    // marginVertical: 20,
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
    // color: "#7369c1",
    // marginBottom: 10,
    fontWeight: '500',
    fontFamily: 'Grandstander',
  },
  context: {
    fontSize: 14,
    color: "#1a172b",
    fontWeight: '400',
    marginTop: 10,
    // fontFamily: 'Grandstander',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
