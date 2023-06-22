import React, { useState } from 'react';
import { Text, View, styleSheet, TextInput, TouchableOpacity } from 'react-native';

import Index from './Header';

export default function Apostila_08() {
    return (

    <View style={styles.container}>
        <Text style={styles.paragraph}> Exemplo 8 </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E1F5FE',
        padding: 8,
    },
    paragraph: {
    margin: 6,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#03A9F4',
    },
});
