import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const Multiplicadora = () => {
  const [multiplicando, setMultiplicando] = React.useState('');
  const [arr, setArr] = React.useState([]);

  handleClick = () => {
    let newArr = [];
    for (multiplicador = 1; multiplicador <= 13; multiplicador++){
      res = multiplicando*multiplicador;
      newArr.push(multiplicando+' X '+multiplicador+' = '+res+'\n');
      setArr(newArr);
    }

  };
  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Inserta un Numero:</Text>
        <TextInput style={styles.input}
          keyboardType="numeric"
          onChangeText={newNum => setMultiplicando(parseInt(newNum))}
        value={multiplicando}/>
      </View>

      <View style={styles.boton}>
        <Button
          title="Mostrar Tabla"
          onPress={this.handleClick}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>{arr}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    
  },
  label: {
    paddingRight: 10,
    marginBottom: 30,
    marginLeft: 10,
    fontSize: 20,
  },
  box: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: 100,
    textAlign: 'center',
    
  },
  boton: {
    marginBottom: 30,
    borderColor: 'red',
  }
});

export default Multiplicadora;