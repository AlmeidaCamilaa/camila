import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Botao({sinal,funcao}) {
    return(
        <TouchableOpacity
            style={[styles.button, styles.boaoSinal]}
            onPress={() => funcao()}
    >
            <Text style={sttyles.textButton} >{Sinal}</Text>
        </TouchableOpacity>
    );
}

    export default Botao;