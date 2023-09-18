import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/Botao";
import { HistoricoBusca } from "../componentes/HistoricoBusca";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";

export default function Historico(){
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite o nome da empresa"
          />
          <EntradaTexto
            placeholder="Digite a especificação"
          />
          <Botao mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="blue.500" alignSelf="center">Resultado da Busca</Titulo>
        {[1].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <HistoricoBusca 
              especialidade="Comida"
              nome="Ifood"
              data="26/01/2020"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}