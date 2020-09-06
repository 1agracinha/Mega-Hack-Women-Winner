import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import CardMotivation from '../components/CardMotivation';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Root'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
};

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
    {/* <CardMotivation path="/screens/TabOneScreen.tsx" /> */}
  </>
)

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState([
    {
      key: '1',
      colorCard: '#d9e5f2',
      content: 'As estratégias de marketing são fundamentais para dar visibilidade ao seu negócio atraindo novos clientes.  Encontre aqui materiais sobre marketing de conteúdo, funil de vendas,  assessoria de comunicação, e-mail marketing e muito mais.',
      cardTitle1: "Tudo sobre Marketing",
      cardContent1: "Se você tem duvidas sobre como montar o marketing do seu negócio, estamos aqui pra te ajudar...",
      title: "Marketing",
      image: "https://pikwizard.com/photos/woman-using-mobile-phone-near-window--df39295d5760bd890dd836aa616eea56-m.jpg",
    },
    {
      key: '2',
      colorCard: '#f0e1db',
      content: 'A informalidade se torna um problema em algumas situações. Nesta área você vai compreender os diversos tipos de empresa, como fazer para formalizar a sua além de conhecer casos de quem já passou por isto....',
      cardTitle1: "Formalize-se",
      cardContent1: "A informalidade se torna um problema em algumas situações. Nesta área você vai compreender os diversos tipos de empresa, como fazer para formalizar a sua além de conhecer casos de quem já passou por isto....",
      title: "Formalização",
      image: "https://pikwizard.com/photos/woman-reading-newspaper-at-counter--abc05ecfd28ec224d5db0525db60a0da-m.jpg",
    },
    {
      key: '3',
      colorCard: '#e2ddee',
      content: 'Vamos aprender a controlar as finanças no dia a dia.Separar bem o que é da empresa e o que é pessoal. Pagar tudo o que é devido e fazer aquela reserva para os momentos de emergência.',
      cardTitle1: "Organize suas contas",
      cardContent1: "Vamos aprender a controlar as finanças no dia a dia.Separar bem o que é da empresa e o que é pessoal.",
      title: "Finanças",
      image: "https://pikwizard.com/photos/woman-having-cup-of-coffee-at-caf%C3%A3%C2%A9--9c6db970b0999285faf5d95c231b3461-m.jpg",
    },
    {
      key: '4',
      colorCard: '#f0ecdb',
      content: 'Na área jurídica o profissional lida com o contrato social, gestão de contratos de trabalho, conformidade de processos entre outros. Nesta área você vai encontrar materiais que te ajudarão a entender a necessidade e importância destes documentos.',
      cardTitle1: "Ajuda Jurídica",
      cardContent1: "Na área jurídica o profissional lida com o contrato social, gestão de contratos de trabalho,",
      title: "Jurídico",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      key: '5',
      colorCard: '#ddedeb',
      content: 'Cálculo e recolhimento de impostos, taxas devidas, balanço patrimonial, emissão de nota fiscal. A contratação do trabalho de um contador é fundamental em qualquer empresa mas, tem horas que a gente quer mesmo é entender melhor o trabalho que ele faz e quais as nossas obrigações.',
      cardTitle1: "Suas Contas estão de dando dor de cabeça?",
      cardContent1: "Cálculo e recolhimento de impostos, taxas devidas, balanço patrimonial, emissão de nota fiscal...",
      title: "Contabilidade",
      image: "https://pikwizard.com/photos/woman-using-mobile-phone-near-window--df39295d5760bd890dd836aa616eea56-m.jpg",
    },
    {
      key: '6',
      colorCard: '#d9e5f2',
      content: 'As redes sociais também são excelentes ferramentas para registrarmos a nossa presença comercial.Você sabe como fazer um post para o Instagram? Já pensou em fazer uma divulgação patrocinada? Se não entende muito bem como tudo isto funciona, entre aqui!',
      cardTitle1: "Saiba como usar as redes para alavancar seus negócios",
      cardContent1: "As redes sociais também são excelentes ferramentas para registrarmos a nossa presença comercial....",
      title: "Redes Sociais",
      image: "https://pikwizard.com/photos/woman-reading-newspaper-at-counter--abc05ecfd28ec224d5db0525db60a0da-m.jpg",
    },
    {
      key: '7',
      colorCard: '#f0ecdb',
      content: 'A pandemia escancarou um grande problema. Muitas empresas ainda não vendem pela internet. Precisa saber como abrir uma loja virtual? Aqui você vai descobrir.',
      cardTitle1: "Qual sua loja virtual favorita?",
      cardContent1: "A pandemia escancarou um grande problema. Muitas empresas ainda não vendem pela internet....",
      title: "Loja virtual",
      image: "https://pikwizard.com/photos/woman-having-cup-of-coffee-at-caf%C3%A3%C2%A9--9c6db970b0999285faf5d95c231b3461-m.jpg",
    },
    {
      key: '8',
      colorCard: '#e2ddee',
      content: 'Investimento inicial, capital de giro. Às vezes o que falta para um negócio de sucesso é justamente o dinheiro. Aqui temos informações de algumas linhas de crédito e como fazer para acessá-las.',
      cardTitle1: "Não tenho dinheiro, e agora?",
      cardContent1: "Investimento inicial, capital de giro. Às vezes o que falta para um negócio de sucesso é...",
      title: "Crédito",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      key: '9',
      colorCard: '#ddedeb',
      content: 'E aquele dia em que você estava na rua e precisou daquele documento que deixou no computador do escritório? Os serviços de armazenamento em nuvem nos permitem fácil aceso aos documentos via internet e ainda viabilizam compartilhar o acesso com a equipe.',
      cardTitle1: "Onde deixar meus dados?",
      cardContent1: "E aquele dia em que você estava na rua e precisou daquele documento que deixou no computador do escritório? Se você tem duvidas sobre como montar o marketing do seu negócio, estamos aqui pra te ajudar...",
      title: "Armazenamento em nuvem",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      key: '10',
      colorCard: '#d9e5f2',
      content: 'Tecnologia é o conjunto de técnicas, habilidades, métodos e processos usados na produção de bens ou serviços, ou na realização objetivos, como por exemplo em investigações científicas. ',
      cardTitle1: "Quer empreender em tecnologia? Chegue mais.",
      cardContent1: "é o conjunto de técnicas, habilidades, métodos e processos usados na produção de bens ou serviços, ou na realização objetivos, como por exemplo em investigações científicas....",
      title: "Tecnologia",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Boas Vindas!!! */}
        <View style={[styles.wrapper2]} >
          <Text style={styles.title}>Bem-vinda a ConnectApp!</Text>
          <View style={styles.barra} />
          <Text style={styles.context}>
            Vamos fazer o que fazemos de melhor, compartilhar conhecimento e ajudar umas as outras.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 30 }} >
          <Text style={styles.title}> Principais Assuntos: </Text>
        </View>

        {/* Categorias disponíveis */}
        {data.map((item) => (
          <View key={item.key}>

            <View style={[styles.wrapper, styles.back, { backgroundColor: item.colorCard }]} >
              <TouchableOpacity onPress={() => { navigation.navigate('Category', { key: '199', title: "hoje gg" }) }}>
                <Text style={styles.title}>{item.title}</Text>

                <Text style={styles.context}>
                  {item.content}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.bloco]} >
              <View style={[styles.bigCardView, {
                borderColor: item.colorCard,
                borderWidth: 3,
              }]} >
                <Text style={styles.subtitle}>{item.cardTitle1}</Text>
                <View style={styles.barra} />
                <Text style={styles.context}>
                  {item.cardContent1}
                </Text>
              </View>

              <View style={styles.smallCardView} >

                <View style={[styles.smallCard, {
                  borderColor: item.colorCard,
                  borderWidth: 3
                }]}>
                  <Text style={styles.context}>News</Text>
                  <View style={styles.barra} />
                </View>

                <View style={[styles.smallCard, {
                  borderColor: item.colorCard,
                  borderWidth: 3
                }]}>
                  <Text style={styles.context}>Gastos</Text>
                  <View style={styles.barra} />
                </View>

                <View style={[styles.smallCard, {
                  borderColor: item.colorCard,
                  borderWidth: 3
                }]}>
                  <Text style={styles.context}> Mais . . .</Text>
                  <View style={styles.barra} />
                </View>

              </View>
            </View>
          </View>
        ))}

        {/* Mais assuntos por vim */}
        <View style={{ padding: 20 }} >
          <Text style={[styles.title, { textAlign: 'center' }]}>
            Mais assuntos EM BREVE!!
          </Text>
          <View style={[styles.fullBarra, { alignSelf: 'center' }]} />
        </View>
        <CardMotivation path="/screens/TabOneScreen.tsx" />

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
    borderColor: "#fff",
    borderWidth: 2,
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
    paddingBottom: 50,
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
    borderColor: "#eee",
    borderWidth: 3,
  },
  smallCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    height: 70,
    borderColor: "#eee",
    borderWidth: 3,
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
  fullBarra: {
    marginVertical: 5,
    width: '60%',
    height: 5,
    backgroundColor: Colors.dark.gray,
    borderRadius: 3,
  },
  container: {
    flex: 1,
  },
  back: {
    backgroundColor: '#d9e5f2',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    borderColor: "#fff",
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    color: Colors.light.primary,
    fontWeight: 'bold',
    fontFamily: 'Grandstander',
  },
  subtitle: {
    color: '#666',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Grandstander',
  },
  context: {
    fontSize: 14,
    color: "#444",
    fontWeight: '500',
    marginTop: 10,
    maxHeight: 99,
    lineHeight: 23,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default HomeScreen;