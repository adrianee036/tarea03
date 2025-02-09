import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'



const Sumadora = () => {
  const [Num1, setNum1] = React.useState('');
  const [Num2, setNum2] = React.useState('');
  const [resultado, setResultado] = React.useState('');
  
  handleClick = () => {
    suma = (Num1+Num2).toFixed(2);
    setResultado('Resultado: '+suma);

  };
  
  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <Text style={styles.label}>Inserta el Primer Número:</Text>
        <TextInput style={styles.input}
          keyboardType="numeric"
          onChangeText={newNum => setNum1(parseInt(newNum))}
        value={Num1}/>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Inserta el Segundo Número:</Text>
        <TextInput style={styles.input}
          keyboardType="numeric"
          onChangeText={newNum => setNum2(parseInt(newNum))}
        value={Num2}/>
      </View>

      <View style={styles.boton}>
        <Button
          title="Calcular"
          onPress={this.handleClick}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>{resultado}</Text>
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



export default Sumadora; 