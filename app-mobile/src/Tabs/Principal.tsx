import { VStack, Image, Box, ScrollView, Text, Divider } from "native-base";
import Logo from '../assets/sensegestao.png';
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { depoimentos } from "../utils/mock";


export default function Principal(){

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="center" justifyContent="flex-start" p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Titulo color="blue.500">Gestão de Gastos 2.0</Titulo>

        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade"
          />
          <EntradaTexto
            placeholder="Digite sua localização"
          />
          <Botao mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="blue.500" alignSelf="center">Evolua sua gestão de gastos, crie jornadas 
        personalizadas, automatizadas e baseadas em dados.</Titulo>
        
        <VStack space={3} divider={<Divider />} w="100%" mt={7}> 
          <Text color="gray.300" fontSize="md" textAlign="justify">
          A SenseGestão é uma plataforma de Gestão capaz de integrar 
          e analisar grandes volumes de gastos, criar uma visão única e 
          360º dos usuários, com indicadores específicos para cada 
          tipo de gasto.
          </Text>
        </VStack>


        <Titulo color="blue.500" alignSelf="center">Caso de Sucesso: aumento
        na utilização dos produtos e redução de cancelamentos</Titulo>
        
        <VStack space={3} divider={<Divider />} w="100%" mt={7}> 
          <Text color="gray.300" fontSize="md" textAlign="justify">
          A SenseGestão foi a plataforma escolhida para escalar a atuação de 
          Gestão de Sucesso dentro da Serosa Expo, e os resultados dessa parceria
          são impressionantes: aumento de 54% na utilização dos produtos, 25% da
          redução de churn e muito mais!
          </Text>
        </VStack>


      </VStack>
    </ScrollView>
  );
}