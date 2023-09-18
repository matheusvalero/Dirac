import { VStack, Divider, ScrollView } from 'native-base'
import { Botao } from '../componentes/Botao'
import { HistoricoBusca } from '../componentes/HistoricoBusca'
import { Titulo } from '../componentes/Titulo'

export default function Registros(){
  return(
    <ScrollView p="5">
      <Titulo color="blue.500">Registros</Titulo>
      <Botao mt={5} mb={5}>registrar novo gasto</Botao>

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Gastos Parcelados</Titulo>
      <HistoricoBusca 
        nome='Netflix'
        especialidade='Streaming'
        data='18/09/2023'
    
      />

      <Divider mt={5} />

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Gastos Passados</Titulo>
      <HistoricoBusca 
        nome='Amazon'
        especialidade='Compra na Internet'
        data='10/08/2023'

      />
      <HistoricoBusca 
        nome='Shein'
        especialidade='Roupas'
        data='20/08/2023'

      />
      <HistoricoBusca 
        nome='Wallmart'
        especialidade='Mercado'
        data='11/05/2023'

      />
    </ScrollView>
  )
}