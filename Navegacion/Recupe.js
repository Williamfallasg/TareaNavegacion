import React from "react"
import {View, Text,TextInput, Image,StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';



const Recupe = () => {
    const navegaction= useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./image.png')} style={styles.imgLogo} />

      <Text style={styles.txtBien}>Recuperar cuenta</Text>
      <Text style={styles.titulo}>Recupera su cuenta:</Text>

      <TextInput placeholder='Constraseña nueva' style={styles.txtInput} />
      <TextInput placeholder='Confirmar Contraseña' style={styles.txtInput} />

      <TouchableOpacity style={styles.txtOlviContainer}onPress={()=>navegaction.navigate("Bienvenido")}>
        <Text style={styles.txtOlvi}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navegaction.navigate("Crear")}>
        <LinearGradient
          colors={['#00C1BB', '#005B58']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLoginGradient}
        >
          <Text style={styles.btnLoginText}>Restablecer</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>navegaction.navigate("Crear")}>
        <Text style={styles.txtCrearCuenta}>
          No tiene cuenta. 
        </Text>
        <Text style={styles.txtRigi}>Registrar
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default Recupe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  txtBien: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#34434D',
      paddingLeft: 30, 
      textAlign: 'left',
  },
  titulo: {
      fontSize: 20,
      fontWeight: '300',
      color: 'gray',
      textAlign: 'left',
      paddingLeft: 30,
  },
  txtInput: {
      width: '95%',
      height: 50,
      borderRadius: 30,
      borderWidth: 1,
      paddingLeft: 30,
      marginTop: 20,
      marginLeft: 20,
      borderColor: 'grey',
      color: 'grey',
      backgroundColor: '#F5F5F5',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  },
  txtOlviContainer: {
    alignSelf: 'flex-end', 
    width: '100%'
  },
  
  txtOlvi: {
      fontSize: 16,
      color: "#00c1bb",
      marginTop: 2,
      textAlign: 'right'
  },
  txtCrearCuenta: {
      fontSize: 18,
      color: "#00c1bb",
      marginTop: 10,
      alignContent: "center",

  },
  txtRigi: {
      color: "#00c1bb",
      fontWeight: "bold",
      alignItems: 'center',
  },
  imgLogo: {
    width: '100%',
    height: 206,
    resizeMode: 'cover',
  },
  btnLoginGradient: {
      borderRadius: 30,
      width: 219,
      height: 53,
      marginTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
  },
  btnLoginText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
  },
});