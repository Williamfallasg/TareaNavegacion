import React from "react"
import {View, Text,TextInput, Image,StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

const Crear = () => {
  
  const navegaction= useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./image.png')} style={styles.imgLogo} />

      <Text style={styles.txtBien}>Crear Cuenta</Text>
      <Text style={styles.titulo}>Ingrese los datos solicitados:</Text>

      <TextInput placeholder='Nombre completo' style={styles.txtInput} />
      <TextInput placeholder='Correo electrónico' style={styles.txtInput} />
      <TextInput placeholder='Contraseña' style={styles.txtInput} />

      <TouchableOpacity style={styles.txtOlviContainer} onPress={()=>navegaction.navigate("Bienvenido")}>
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
          <Text style={styles.btnLoginText}>Registrate</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>navegaction.navigate("Recuperar")}>
        <Text style={styles.txtCrearCuenta}>
          Ya tiene cuenta 
        </Text>
        <Text style={styles.txtRigi}>¿Has olvidado tu contraseña?</Text>
      </TouchableOpacity>
      

      <StatusBar style="auto" />
    </View>
  );
}

export default Crear;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  txtBien: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#34434D',
      paddingLeft: 2, 
      textAlign: 'left',
  },
  titulo: {
      fontSize: 18,
      fontWeight: '300',
      color: 'gray',
  },
  txtInput: {
    width: '95%',
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 20,
    borderColor: 'grey',
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
      marginTop: 2,
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  txtRigi: {
      color: "#00c1bb",
      fontWeight: "bold",
      textAlign: 'center',
  },
  imgLogo: {
    width: '100%',
    height: 200,
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
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      
  },
});
