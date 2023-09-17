import Login from './src/Login';
import { THEMES } from './src/styles/style';
import {NativeBaseProvider, StatusBar} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.black}/>
      <Login />
    </NativeBaseProvider>
  );
}
