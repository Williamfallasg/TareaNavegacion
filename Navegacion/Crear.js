import React from "react"
import {View, Text,TextInput, Image,StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";

import appFirebase from '../Firebase';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(appFirebase)


const Crear = () => {

  const navegaction= useNavigation();
  const inicioEstado = {
  nombreCompleto: '',
  email: '',
  clave: '',
    }
  const [estado, setEstado]= useState (inicioEstado)

  const HandleChangeText = (value, name) => {
    setEstado({ ...estado, [name]: value })
  }

  const RegistarUsuario = async()=>{
    //console.log(estado)
    try {
      await addDoc(collection(db, 'usuarios'),{...estado})

      Alert.alert('Alerta', 'El usuario se registró con éxito')

      props.navigation.navigate('Login')
     
    } catch  {
      console.error(error)
    }
  }
  /*
  const RegistarUsuario = ()=>{
    console.log(estado)
  }*/

  return (
    <View style={styles.container}>
      
      <Image source={require('./logo_fruit.png')} style={styles.imgLogo1} />
      <Image source={require('./img_fondo.jpg')} style={styles.imgLogo} />
      


      <Text style={styles.txtBien}>Crear Cuenta Nueva</Text>
      <TextInput placeholder='Nombre completo' style={styles.txtInput} 
      onChangeText={(value) => HandleChangeText(value, 'nombreCompleto')}
      value={estado.nombreCompleto}
      />
      <TextInput placeholder='Correo electrónico' style={styles.txtInput} 
      onChangeText={(value) => HandleChangeText(value, 'email')}
      value={estado.email}
      />
      <TextInput placeholder=' Comprobar Contraseña' style={styles.txtInput} 
      onChangeText={(value) => HandleChangeText(value, 'clave')}
      value={estado.clave}
      />
       <TextInput placeholder='Contraseña' style={styles.txtInput} 
      onChangeText={(value) => HandleChangeText(value, 'clave')}
      value={estado.clave}
      />

      <TouchableOpacity style={styles.txtOlviContainer} onPress={()=>navegaction.navigate("Bienvenido")}>
        <Text style={styles.txtOlvi}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      //</View>onPress={()=>navegaction.navigate("Crear")}

      onPress={ RegistarUsuario}
       >
        <LinearGradient
          colors={['#871F1F', '#871F1F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLoginGradient}
        >
          <Text style={styles.btnLoginText}>Registrarse</Text>
        </LinearGradient>
        
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=>navegaction.navigate("Recuperar")}>
        <Text style={styles.txtCrearCuenta}>
          Ya tiene cuenta 
        </Text>
        <Text style={styles.txtRigi}>Productos</Text>
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
    width: 200,
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
  imgLogo1: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
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
      color: '#871F1F'
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
