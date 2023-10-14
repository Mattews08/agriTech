import { NavigationContainer } from "@react-navigation/native";
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { Routes } from "./src/router/router";


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
  return null;

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
