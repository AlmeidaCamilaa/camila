import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

function Apostila04() {
  const [entrada, setEntrada] = useState("");
  const [mensagem, setMensagem] = useState("Aqui aparece o texto digitador");
  const[nome, setNome]= useState ('');
  const[sobrenome, setsobreNome]= useState ('');

  function apresentaMensagen(){
      setMensagem(nome + ' ' + sobrenome);
      setNome('');
      setsobreNome('');

  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Exemplo 4</Text>

      <Text style={styles.txtSaida}>{mensagem}</Text>
      <TextInput
        style={styles.txtEntrada}
        onChangeText={(nome) => setNome(nome)} 
      placeholder = 'nome'
        value={nome}
      />

<TextInput
        style={styles.txtEntrada}
        onChangeText={(inputsobrenome) => setsobreNome(inputsobrenome)}
        placeholder = 'sobrenome'
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
