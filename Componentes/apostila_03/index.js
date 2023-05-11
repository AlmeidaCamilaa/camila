import  React, { useState} from 'react'; 
import { Text, View , TouchableOpacity } from 'react-native';

import styles from './styles';


export default function apostila03() {

  const[contador, setContador] = useState(0);

 function AddNumber(){
  setContador(contador + 1);

 }

 function SubNumber(){
  setContador(contador - 1);

 }


function Number(){
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
        <Text style={styles.textButton}>Somar +1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={ () => SubNumber()}
      >
        <Text style={styles.textButton}>Subtrai 1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={ () => Number()}
      >
        <Text style={styles.textButton}>Zerar</Text>
      </TouchableOpacity>
    
    </View>

  );
}
