import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { AuthContextProvider } from "./src/contexts/AuthContext";

import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/componets/Loading';

import { THEME } from './src/styles/theme';
import { Routes } from "./src/routes";


export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });
  
  
  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        { fontLoaded ? <Routes/>: <Loading /> }
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
