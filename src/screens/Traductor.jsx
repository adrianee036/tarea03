import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const Traductor = () => {
  const [num, setNum] = React.useState('');
  const [resultado, setResultado] = React.useState('');
  

  handleClick = () => {
    if(num == 1000){
      setResultado('MIL');

    }
    else if(num == 0){
      setResultado('CERO');

    }
    else if((num > 0) && (num < 10)){
      setResultado(Unidades(num));
    }
    else if((num > 9) && (num < 100)){
      setResultado(Decenas(num));
    }
    else if((num > 99) && (num < 1000)){
      setResultado(Centenas(num));
    }
    else {setResultado("El numero tiene que ser del 0 al 1000")}
    

  };
  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Inserta un Numero:</Text>
        <TextInput style={styles.input}
          keyboardType="numeric"
          onChangeText={newNum => setNum(parseInt(newNum))}
        value={num}/>
      </View>

      <View style={styles.boton}>
        <Button
          title="Traducir"
          onPress={this.handleClick}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>{resultado}</Text>
      </View>
    </View>
  )

  function Unidades(num){

    switch(num)
    {
        case 1: return 'UN0';
        case 2: return 'DOS';
        case 3: return 'TRES';
        case 4: return 'CUATRO';
        case 5: return 'CINCO';
        case 6: return 'SEIS';
        case 7: return 'SIETE';
        case 8: return 'OCHO';
        case 9: return 'NUEVE';
    }

    return '';
  }//Unidades()

  function Decenas(num){

    let decena = Math.floor(num/10);
    let unidad = num - (decena * 10);

    switch(decena)
    {
        case 1:
            switch(unidad)
            {
                case 0: return 'DIEZ';
                case 1: return 'ONCE';
                case 2: return 'DOCE';
                case 3: return 'TRECE';
                case 4: return 'CATORCE';
                case 5: return 'QUINCE';
                default: return 'DIECI' + Unidades(unidad);
            }
        case 2:
            switch(unidad)
            {
                case 0: return 'VEINTE';
                default: return 'VEINTI' + Unidades(unidad);
            }
        case 3: return DecenasY('TREINTA', unidad);
        case 4: return DecenasY('CUARENTA', unidad);
        case 5: return DecenasY('CINCUENTA', unidad);
        case 6: return DecenasY('SESENTA', unidad);
        case 7: return DecenasY('SETENTA', unidad);
        case 8: return DecenasY('OCHENTA', unidad);
        case 9: return DecenasY('NOVENTA', unidad);
        case 0: return Unidades(unidad);
    }
  }//Unidades()

  function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
        return strSin + ' Y ' + Unidades(numUnidades)

    return strSin;
  }//DecenasY()

  function Centenas(num) {
    let centenas = Math.floor(num / 100);
    let decenas = num - (centenas * 100);

    switch(centenas)
    {
        case 1:
            if (decenas > 0)
                return 'CIENTO ' + Decenas(decenas);
            return 'CIEN';
        case 2: return 'DOSCIENTOS ' + Decenas(decenas);
        case 3: return 'TRESCIENTOS ' + Decenas(decenas);
        case 4: return 'CUATROCIENTOS ' + Decenas(decenas);
        case 5: return 'QUINIENTOS ' + Decenas(decenas);
        case 6: return 'SEISCIENTOS ' + Decenas(decenas);
        case 7: return 'SETECIENTOS ' + Decenas(decenas);
        case 8: return 'OCHOCIENTOS ' + Decenas(decenas);
        case 9: return 'NOVECIENTOS ' + Decenas(decenas);
    }

    return Decenas(decenas);
  }//Centenas()

  function Seccion(num, divisor, strSingular, strPlural) {
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let letras = '';

    if (cientos > 0)
        if (cientos > 1)
            letras = Centenas(cientos) + ' ' + strPlural;
        else
            letras = strSingular;

    if (resto > 0)
        letras += '';

    return letras;
  }//Seccion()
  


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



export default Traductor;