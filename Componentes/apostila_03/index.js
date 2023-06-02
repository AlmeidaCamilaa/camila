import  React, { useState} from 'react'; 
import { Text, View , TouchableOpacity } from 'react-native';

import styles from './styles';


export default function apostila03() {

  const[contador, setContador] = useState(0);

 function AddNumber(){
  setContador(contador + 1);
  }

  function subNumber(){
    setContador(contador - 1);
  }

  function zerNumber(){
    setContador(contador - contador);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>

      <Text style={styles.textCounter}>{contador}</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={ () => AddNumber()}
      >
        <Text style={styles.textButton}> +1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={ () => subNumber()}
      >
        <Text style={styles.textButton}> -1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={ () => zerNumber()}
      >
        <Text style={styles.textButton}>Zerar contador</Text>
      </TouchableOpacity>

    </View>

  );
}
