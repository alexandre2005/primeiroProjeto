// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// export class App extends Component {
//   // calcular: any;
//   constructor(props) {
//     super(props);
//     this.state = {nota1: 0, nota2: 0, faltas: 0, resultado: ''};
//     this.calcular = this.calcular.bind(this);
//   }

//   calcular() {
//     // eslint-disable-next-line radix
//     let num1 = parseInt(this.state.nota1);
//     // eslint-disable-next-line radix
//     let num2 = parseInt(this.state.nota2);
//     let media = (num1 + num2) / 2;

//     if (media >= 6 && this.state.faltas <= 10) {
//       this.setState({resultado: 'Aluno foi Aprovado'});
//     } else {
//       this.setState({resultado: 'Aluno foi Reprovado'});
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textinput}
//           onChangeText={nota1 => {
//             this.setState({nota1});
//           }}
//           keyboardType="numeric"
//           placeholder="Nota 1"
//         />
//         <TextInput
//           style={styles.textinput}
//           onChangeText={nota2 => {
//             this.setState({nota2});
//           }}
//           keyboardType="numeric"
//           placeholder="Nota 2"
//         />
//         <TextInput
//           style={styles.textinput}
//           onChangeText={faltas => {
//             this.setState({faltas});
//           }}
//           keyboardType="numeric"
//           placeholder="Numero de Faltas"
//         />
//         <TouchableOpacity style={styles.button} onPress={this.calcular}>
//           <Text style={styles.textButton}>Calcular</Text>
//         </TouchableOpacity>
//         <Text style={styles.textResultado}>{this.state.resultado}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   textinput: {
//     padding: 30,
//     backgroundColor: '#CCCCCC',
//     marginLeft: 50,
//     marginRight: 50,
//     marginTop: 30,
//     fontSize: 20,
//   },
//   button: {
//     margin: 20,
//     padding: 20,
//     backgroundColor: '#37474f',
//   },
//   textButton: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     fontFamily: 'Arial',
//     alignSelf: 'center',
//   },
//   textResultado: {
//     color: '#000',
//     fontSize: 22,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//   },
// });

//React Navegation
// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './src/pages/Home';
// import Sobre from './src/pages/Sobre';

// const Stack = createNativeStackNavigator();

// export class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Sobre" component={Sobre} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

//React Hooks
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function App() {
  const [nome, setNome] = useState('Alex');

  function alteraNome() {
    setNome('João');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{nome}</Text>
      <TouchableOpacity style={styles.button} onPress={alteraNome}>
        <Text style={styles.textButton}>Alterar Nome</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 20,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
  },
});
