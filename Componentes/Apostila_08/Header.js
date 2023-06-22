import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, styleSheet, TextInput, TouchableOpacity } from 'react-native';
import styles from '../apostila_03/styles';

import Header from './Header';

export default function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}> {title} </Text>
        </View>
    );
}

const styles = StyleSheet.creat({
    container: {
        flex: 1,
        backgroundColor: '#E1F5FE',
    },
});
