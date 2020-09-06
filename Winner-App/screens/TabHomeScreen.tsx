import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Root'
>;

interface Props  {
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
    {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
  </>
)

const  HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={[styles.wrapper2]} >
          <Text style={styles.title}>Bem-vinda a ConnectApp!</Text>
          <View style={styles.barra} />
          <Text style={styles.context}>
            Vamos fazer o que fazemos de melhor, compartilhar conhecimento e ajudar umas as outras.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 30 }} >
          <Text style={styles.title}>Principais Assuntos: </Text>
        </View>
        
    

        {/* Marketing */}
        <View style={[styles.wrapper, styles.back]} > 
        <TouchableOpacity onPress={()=>{ navigation.navigate('Category')}}>
          <Text style={styles.subtitle}>Marketing  ==3 </Text>

          <Text style={styles.context}>
            As estratégias de marketing são fundamentais para dar
            visibilidade ao seu negócio atraindo novos clientes.
            Encontre aqui materiais sobre marketing de conteúdo, funil de vendas,
            assessoria de comunicação, e-mail marketing e muito mais.
        </Text>  
        </TouchableOpacity>
        </View>
      
        <View style={[styles.bloco]} >
          <View style={[styles.bigCardView,{
             borderColor: "#d9e5f2", 
             borderWidth: 3
            }]} >
            <Text style={styles.title}>Meu marketing não existe.</Text>
            <View style={styles.barra} />
            <Text style={styles.context}>
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
          
          </Text>

          </View>
          <View style={styles.smallCardView} >

            <View style={[styles.smallCard,{
             borderColor: "#d9e5f2", 
             borderWidth: 3
            }]}>
              <Text style={styles.context}>News</Text>
              <View style={styles.barra} />
            </View>

            <View style={[styles.smallCard,{
             borderColor: "#d9e5f2", 
             borderWidth: 3
            }]}>
              <Text style={styles.context}>Gastos</Text>
              <View style={styles.barra} />
            </View>

            <View style={[styles.smallCard,{
             borderColor: "#d9e5f2", 
             borderWidth: 3
            }]}>
              <Text style={styles.context}> Mais . . .</Text>
              <View style={styles.barra} />
            </View>

          </View>
        </View>
        {/* <View style={styles.barra2} /> */}
       
   
        {/* Formalização */}
        <View style={[styles.back, { backgroundColor: '#f0e1db' }]} >
          <Text style={styles.subtitle}> Formalização </Text>

          <Text style={styles.context}>
            A informalidade se torna um problema em algumas situações.
            Nesta área você vai compreender os diversos tipos de empresa,
            como fazer para formalizar a sua além de conhecer casos de
            quem já passou por isto.
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
   
          </Text>

          </View>
          <View style={styles.smallCardView} >

            <View style={styles.smallCard}>
              <Text style={styles.context}>News</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.context}>Gastos</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.context}> . . .</Text>
              <View style={styles.barra} />
            </View>

          </View>
        </View>
        {/* <View style={styles.barra2} /> */}
        {/* Finanças */}
        <View style={[styles.back, { backgroundColor: '#e2ddee' }]} >
          <Text style={styles.subtitle}> Finanças </Text>

          <Text style={[styles.context]}>
            Vamos aprender a controlar as finanças no dia a dia.
            Separar bem o que é da empresa e o que é pessoal.
            Pagar tudo o que é devido e fazer aquela reserva para os
            momentos de emergência.
          </Text>
        </View>
        <View style={[styles.bloco]} >
          <View style={styles.bigCardView} >
            <Text style={styles.title}>Minhas finanças não estão indo bem.</Text>
            <View style={styles.barra} />
            <Text style={styles.context}>
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
         
          </Text>

          </View>
          <View style={styles.smallCardView} >

            <View style={styles.smallCard}>
              <Text style={styles.context}>News</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.context}>Gastos</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.context}> Mais . . .</Text>
              <View style={styles.barra} />
            </View>

          </View>
        </View>
        {/* <View style={styles.barra2} /> */}
        {/* Juridico */}
        <View style={[styles.back, { backgroundColor: '#f0ecdb' }]} >
          <Text style={styles.subtitle}>Jurídico </Text>

          <Text style={[styles.context]}>
            Na área jurídica o profissional lida com o contrato social,
            gestão de contratos de trabalho, conformidade de processos entre outros. Nesta área você vai encontrar materiais que
            te ajudarão a entender a necessidade e importância destes documentos.
          </Text>
        </View>
        <View style={[styles.bloco]} >
          <View style={styles.bigCardView} >
            <Text style={styles.title}>Minhas finanças não estão indo bem.</Text>
            <View style={styles.barra} />
            <Text style={styles.context}>
              Minhas finanças não estão indo bem.
              Minhas finanças não estão indo bem.
        
          </Text>

          </View>
          <View style={styles.smallCardView} >

            <View style={styles.smallCard}>
              <Text style={styles.context}>News</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.context}>Gastos</Text>
              <View style={styles.barra} />
            </View>

            <View style={styles.smallCard}>
              <Text style={styles.context}> Mais . . .</Text>
              <View style={styles.barra} />
            </View>

          </View>
        </View>
        {/* <View style={styles.barra2} /> */}

        {/* Contabilidade */}
        <View style={[styles.back, { backgroundColor: '#ddedeb' }]} >
          <Text style={styles.subtitle}>Contabilidade </Text>

          <Text style={[styles.context]}>
            Cálculo e recolhimento de impostos, taxas devidas, balanço patrimonial,
            emissão de nota fiscal. A contratação do trabalho de um contador é
            fundamental em qualquer empresa mas, tem horas que a gente quer mesmo
            é entender melhor o trabalho que ele faz e quais as nossas obrigações.
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
        {/* <View style={styles.barra2} /> */}

        {/* Redes Sociais */}
        <View style={[styles.back, { backgroundColor: '#d9e5f2' }]} >
          <Text style={styles.subtitle}> Redes Sociais </Text>

          <Text style={[styles.context]}>
            As redes sociais também são excelentes ferramentas para registrarmos a nossa presença comercial.
            Você sabe como fazer um post para o Instagram? Já pensou em fazer uma divulgação patrocinada?
            Se não entende muito bem como tudo isto funciona, entre aqui!
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
        {/* <View style={styles.barra2} /> */}

        {/* Loja virtual */}
        <View style={[styles.back, { backgroundColor: '#f0ecdb' }]} >
          <Text style={styles.subtitle}> Loja virtual </Text>

          <Text style={[styles.context]}>
            A pandemia escancarou um grande problema. Muitas empresas ainda não vendem pela internet.
            Precisa saber como abrir uma loja virtual? Aqui você vai descobrir.
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
        {/* <View style={styles.barra2} /> */}

        {/* Crédito */}
        <View style={[styles.back, { backgroundColor: '#e2ddee' }]} >
          <Text style={styles.subtitle}> Crédito </Text>

          <Text style={[styles.context]}>
            Investimento inicial, capital de giro.
            Às vezes o que falta para um negócio de sucesso é justamente o dinheiro.
            Aqui temos informações de algumas linhas de crédito e como fazer para acessá-las.
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
        {/* <View style={styles.barra2} /> */}

        {/* Armazenamento em nuvem */}
        <View style={[styles.back, { backgroundColor: '#ddedeb' }]} >
          <Text style={styles.subtitle}> Armazenamento em nuvem </Text>

          <Text style={[styles.context]}>
            E aquele dia em que você estava na rua e precisou daquele documento que deixou no computador do escritório?
            Os serviços de armazenamento em nuvem nos permitem fácil aceso aos documentos
            via internet e ainda viabilizam compartilhar o acesso com a equipe.
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
        {/* <View style={styles.barra2} /> */}

        {/* Mais assuntos por vim */}
        <View style={{ padding: 20 }} >
          <Text style={[styles.title, { textAlign: 'center' }]}>
            Mais assuntos EM BREVE!!
          </Text>
          <View style={[styles.fullBarra, { alignSelf: 'center' }]} />
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
    //backgroundColor: "#7c7cb9",
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 20,
    maxHeight: 250,
    padding: 20,
    // shadowColor: '#743c7a',

    // shadowOpacity: 0.50,
    // shadowRadius: 1.41,
    borderColor: "#ffffff", 
    borderWidth: 3,
    // shadowOffset: {
    //   height: 1,
    //   width: 2,
    // }
  },
  smallCard: {
    //backgroundColor: "#f5f5f5",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    height: 70,
    // shadowColor: '#743c7a',

  // shadowOpacity: 0.50,
  //   shadowRadius: 1.41,
    borderColor: "#fff", 
     borderWidth: 3,
  //   shadowOffset: {
  //     height: 1,
  //     width: 2,
  //   }
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

export default HomeScreen;