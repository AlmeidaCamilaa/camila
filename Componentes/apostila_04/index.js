import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

function Apostila04() {
  const [entrada, setEntrada] = useState("");
  const [mensagem, setMensagem] = useState("Aqui aparece o texto digitador");
 
  const[sobrenome, setsobreNome]= useState ('Sobrenome');

  function apresentaMensagen(){
      setMensagem(entrada, sobreNome)
      setEntrada('');
      setsobreNome('');

  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Exemplo 4</Text>

      <Text style={styles.txtSaida}>{mensagem}</Text>
      <TextInput
        style={styles.txtEntrada}
        onChangeText={(inputEntrada) => setEntrada(inputEntrada)}
        value={entrada}
      />

<TextInput
        style={styles.txtEntrada}
        onChangeText={(inputsobrenome) => setsobreNome(inputsobrenome)}
        value={sobrenome}
      />


      <TouchableOpacity
        style={styles.button}
        onPress={() => apresentaMensagen()}
      >
        <Text style={styles.textButton}>Mostrar valor digitado</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Apostila04;
