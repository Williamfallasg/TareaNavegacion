import React from "react"
import {View, Text,TextInput, Image,StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


const Recuperar = () => {
  
  const navegaction= useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('./image.png')} style={styles.imgLogo} />

      <Text style={styles.txtBien}>Recuperar
       cuenta</Text>
      <Text style={styles.titulo}>Ingresar su correo electronico para recuperar cuenta:</Text>

      <TextInput placeholder='multimedios@gmail.com' style={styles.txtInput} />
      
      <TouchableOpacity style={styles.txtOlviContainer} onPress={()=>navegaction.navigate("Bienvenido")}>
        <Text style={styles.txtOlvi}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>navegaction.navigate("Recupe")}>
        <LinearGradient
        
          colors={['#00C1BB', '#005B58']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLoginGradient}
        >
          <Text style={styles.btnLoginText}>Continuar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>navegaction.navigate("Crear")}>
        <Text style={styles.txtCrearCuenta}>
          No tiene cuenta.  
        </Text>
        <Text style={styles.txtRigi}>Registrate</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default Recuperar;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
  },
  txtBien: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#34434D',
      alignSelf: 'flex-start',
      marginBottom: 10,
  },
  titulo: {
      fontSize: 18,
      fontWeight: '300',
      color: 'gray',
      alignSelf: 'flex-start',
      marginBottom: 20,
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
    marginTop: 10,
    width: '100%', 
  },
  txtOlvi: {
      fontSize: 16,
      color: "#00c1bb",
      marginTop: 10,
      textAlign: 'right',
      alignSelf: 'flex-end',
  },
  txtCrearCuenta: {
      fontSize: 16,
      color: "#00c1bb",
      marginTop: 10,
      textAlign: 'center',
  },
  txtRigi: {
      color: "#00c1bb",
      fontWeight: "bold"
  },
  imgLogo: {
    width: 403,
    height: 306,
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
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
  },
});