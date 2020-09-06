import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
// import Video from 'react-native-video';
import CardMotivation from '../components/CardMotivation';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { WebView } from 'react-native-webview';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Root'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const DetailCategoryScreen: React.FC<Props> = ({ navigation }) => {
  return (

    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={[styles.container, { padding: 20 }]} >
          <Text style={styles.title}> Marketing Digital: O Que É, Como Fazer e Estratégias [Guia 2020] </Text>
        </View>

        <View style={[styles.container, { paddingHorizontal: 20 }]} >
          <Text style={styles.subtitle}>
            Esse termo, marketing digital, se tornou popular logo no início da década de 2000.
            Com o aumento de usuários de internet e na forma como eles se comunicam entre si, o
            marketing digital fez as empresas repensarem a forma com que alcançam seus consumidores e vendem seus produtos.
            Hoje, o e-commerce é uma das maiores modalidades de comércio, movimentando bilhões a cada ano.
          </Text>
          <Text />
          <Text style={styles.subtitle}>
            E isso se deve, em grande parte, a diversas estratégias de marketing digital.
            Mas a realidade é que o conceito de marketing digital já existe há bastante tempo.
            Tipo, BASTANTE tempo MESMO. Aproximadamente 100 anos para ser exato.
            Abaixo uma foto do primeiro profissional de marketing digital na história:
          </Text>

        </View>

        <View style={[styles.back]} >
          <Text style={styles.title}> Melhorou, certo?</Text>

          <Text style={styles.context}>
            Agora temos uma definição simples e memorável do que é e para que serve o marketing digital.
         </Text>
        </View>

        <WebView
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          source={{ uri: 'https://www.youtube.com/watch?v=im7ct31o35c&ab_channel=Mepoupe%21' }}
        />

        <View style={[styles.container, { padding: 20 }]} >
          <Text style={styles.subtitle}>
            Talvez você está se perguntando: “Como assim? O que esse físico italiano tem a ver com marketing digital?”
            Pois é. Em 1896, ele foi a primeira pessoa a realizar uma transmissão pública com sinais wireless.
            Foi esse cara, Marconi, que inventou o rádio.
          </Text>
        </View>

        <View style={[styles.container, { padding: 20 }]} >
          <Text style={styles.fonteText}>
            Fonte: https://neilpatel.com/br/como-fazer-marketing-digital-o-guia-passo-a-passo/
          </Text>
        </View>

      </SafeAreaView>
    </ScrollView >

  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    shadowColor: '#A596F4',
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
    backgroundColor: '#fff',
  },
  back: {
    backgroundColor: '#d2e5f2',
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
    fontSize: 16,
    // color: "#7369c1",
    // marginBottom: 10,
    fontWeight: '500',
    // fontFamily: 'Grandstander',
    lineHeight: 25,
  },
  fonteText: {
    textAlign: 'center',
    fontSize: 14,
    color: "#777",
    // marginBottom: 10,
    fontWeight: '700',
    // fontFamily: 'Grandstander',
    lineHeight: 16,
  },
  context: {
    fontSize: 16,
    color: "#1a172b",
    fontWeight: '400',
    marginTop: 10,
    lineHeight: 19,
    // fontFamily: 'Grandstander',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


export default DetailCategoryScreen;