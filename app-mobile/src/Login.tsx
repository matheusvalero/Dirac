import { TouchableOpacity } from 'react-native';
import { Box, Button, VStack, FormControl, Image, Input, Link, Text } from 'native-base';
import Logo from './assets/sensegestao.png'

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent='center' p={5} >
      <Image source={Logo} alt="Logo Sense" />

      <Text
        color="gray.500"
        fontWeight="bold"
        textAlign="center"
        mt={5}
      >
        Faça Login em Sua Conta:
      </Text>

      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email:</FormControl.Label>
          <Input placeholder='Insira seu Endereço de E-mail'
          size='lg'
          w='100%'
          borderRadius='lg'
          shadow={3}
          bgColor='gray.100'
          />
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha:</FormControl.Label>
          <Input placeholder='Insira sua Senha de Acesso'
          size='lg'
          w='100%'
          borderRadius='lg'
          shadow={3}
          bgColor='gray.100'
          />
        </FormControl>
      </Box>

      <Button w="100%" bg='blue.800' mt={10} borderRadius='lg'>
        Entrar
      </Button>

      <Link href=''>
        Esqueceu sua senha?
      </Link>

      <Box w='100%' flexDirection='row' justifyContent='center'>
        <Text>Ainda não possui uma conta? </Text>
        <TouchableOpacity><Text color='blue'>Faça seu Cadastro</Text></TouchableOpacity>
      </Box>
    </VStack>
  );
}
