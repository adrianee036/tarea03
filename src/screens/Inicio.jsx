import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Inicio = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.foto} source={require('../imagenes/FotoPerfil.png')}></Image>
        <Text style={styles.labels} >Adrian Elias Ureña Gomez</Text>
        <Text style={styles.labels} >20212225@itla.edu.do</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      alignItems: 'center',
    },
    foto:{
        width: 300,
        height: 300,
        marginBottom:30,
    },
    labels:{
        padding: 15,
        fontWeight: 'bold',
        fontSize: 23.5
    },
  });

export default Inicio; 