import 'react-native-gesture-handler';
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Inicio from "./src/screens/Inicio";
import Multiplicadora from "./src/screens/Multiplicadora";
import Sumadora from './src/screens/Sumadora';
import Traductor from './src/screens/Traductor';



const Drawer = createDrawerNavigator();

const App = () =>  {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Página Inicial" component={Inicio} />
        <Drawer.Screen name="Sumadora" component={Sumadora} />
        <Drawer.Screen name="Traductor de Números a Letras" component={Traductor} />
        <Drawer.Screen name="Tabla de Multiplicar" component={Multiplicadora} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App; 