import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Presentacion from "../screens/Presentacion";
import AnalisisNum from "../screens/AnalisisNum";
import Multiplicadora from "../screens/Multiplicadora";



const Drawer = createDrawerNavigator()

export function DrawerNavigation() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Presentación" component={ Presentacion }/>
            <Drawer.Screen name = "Análisis de Números" component={ AnalisisNum }/>
            <Drawer.Screen name = "Multiplicadora del 1 al 14" component={ Multiplicadora }/>
        </Drawer.Navigator>
    )
}