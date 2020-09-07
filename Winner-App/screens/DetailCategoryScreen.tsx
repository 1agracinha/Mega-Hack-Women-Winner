import * as React from 'react';
import { Video } from 'expo-av';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import MarketVideo from '../assets/videos/Marketing.mp4'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

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
          <Text style={styles.title}> Marketing Digital: O Que É, Como Fazer e Estratégias  </Text>
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

        {/* WebView: video */}
        <Video
          //source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          source={MarketVideo}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          //isLooping
          accessibilityComponentType="button"
          style={{ width: 320, height: 200, alignSelf: "center", borderRadius: 10, margin: 20, marginBottom: 0 }}
        />
        <View style={[styles.container, { padding: 20 }]} >
          <Text style={styles.fonteText}>
            Fonte: Job no Cafofo - Canal do YouTube
          </Text>
        </View>

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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  back: {
    backgroundColor: '#ddedeb',
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
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 25,
  },
  fonteText: {
    textAlign: 'center',
    fontSize: 14,
    color: "#777",
    fontWeight: '700',
    lineHeight: 16,
  },
  context: {
    fontSize: 16,
    color: "#1a172b",
    fontWeight: '400',
    marginTop: 10,
    lineHeight: 19,
  },
});


export default DetailCategoryScreen;