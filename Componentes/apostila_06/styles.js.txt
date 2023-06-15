import { StyleSheet } from 'react-native';
import { Constants } from 'expo-constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: 15,
		backgroundColor: '#AAA',
		padding: 8,
	},
	paragraph: {
		margin: 6,
		fontSize: 18,
		fontweight: 'bold',
		textAlign: 'center',
		color: '#AAA',
	},
	entradaImc: {
		flex: 1,
		flexDirection: 'row',
	},
	input: {
		height: 80,
		textAlign: 'center',
		width: '50%',
		fontSize: 50,
		marginTop: 30,
		color: 'lightgray',
		borderColor: '#FFFFFF', // Cor da borda
		borderWidth: 1, // Espessura da borda
	},
	button: {
		backgroundColor: '#89FFA5',
	},
	buttonText: {
		alignSelf: 'center',
		padding: 25,
		fontSize: 25,
		color: '#6DC4A4',
		fontWeight: 'bold',
	},
	resultados: {
		alignSelf: 'center',
		color: 'lightgray',
		fontSize: 65,
		padding: 15,
	},
	result: {
		alignSelf: 'center',
		color: 'lightgray',
		fontSize: 40,
		padding: 5,
	},
});

export default styles;