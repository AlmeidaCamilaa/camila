import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from 'apostila_05/styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        <Text style={styles.txtSaida}>Calculadora básica </Text>
        <Text style={styles.textLabel}>1° número </Text>
        <TextInput style={styles.txtEntrada} />
        <Text style={styles.txtSaida}> + </Text>
        <Text style={styles.textLabel}>2° número </Text>
        <TextInput style={styles.txtEntrada} />
        <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>
        <Text style={styles.textLabel}>Total </Text>
        <TextInput style={styles.txtEntrada} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}





