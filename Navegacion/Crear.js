import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

import appFirebase from '../Firebase';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(appFirebase);

const Crear = () => {
    const navigation = useNavigation();
    const inicioEstado = {
        nombreCompleto: '',
        email: '',
        clave: '',
        comprobarClave: ''
    };
    const [estado, setEstado] = useState(inicioEstado);

    const HandleChangeText = (value, name) => {
        setEstado({ ...estado, [name]: value });
    };

    const RegistarUsuario = async () => {
        try {
            await addDoc(collection(db, 'usuarios'), { ...estado });
            Alert.alert('Alerta', 'El usuario se registró con éxito');
            navigation.navigate('Login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
          
            <Image source={require('./image2.png')} style={styles.imgBackground} />
           
            <View style={styles.overlay} />
            <View style={styles.content}>
          
                <View style={styles.formContainer}>
                    <Text style={styles.txtBien}>Crear cuenta nueva</Text>
                    <TextInput
                        placeholder='Nombre completo'
                        style={styles.txtInput}
                        onChangeText={(value) => HandleChangeText(value, 'nombreCompleto')}
                        value={estado.nombreCompleto}
                        placeholderTextColor="gray"
                    />
                    <TextInput
                        placeholder='Correo electrónico'
                        style={styles.txtInput}
                        onChangeText={(value) => HandleChangeText(value, 'email')}
                        value={estado.email}
                        placeholderTextColor="gray"
                    />
                    <TextInput
                        placeholder='Contraseña'
                        style={styles.txtInput}
                        onChangeText={(value) => HandleChangeText(value, 'clave')}
                        value={estado.clave}
                        placeholderTextColor="gray"
                        secureTextEntry={true}
                    />
                    <TextInput
                        placeholder='Comprobar contraseña'
                        style={styles.txtInput}
                        onChangeText={(value) => HandleChangeText(value, 'comprobarClave')}
                        value={estado.comprobarClave}
                        placeholderTextColor="gray"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={RegistarUsuario}>
                        <LinearGradient
                            colors={['#871F1F', '#871F1F']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.btnLoginGradient}
                        >
                            <Text style={styles.btnLoginText}>Registrarse</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.txtCrearCuentaContainer}>
                    <Text style={styles.txtCrearCuenta}>Ya tiene cuenta? Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default Crear;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginHorizontal:'30'
        
    },
    imgBackground: {
      width: 350,
      height: 300,
      marginBottom: 2,
      marginHorizontal: 10,
      padding: 10,
      borderRadius:50,
    },
    content: {
        width: '70%',
        alignItems: 'center',
        zIndex: 1,
    },
    imgLogo: {
        width: 80,
        height: 80,
        marginBottom: 0,
        borderRadius:30,
        marginTop: 0
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 2,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        marginTop: 10
    },
    txtBien: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#34434D',
        marginBottom: 20,
    },
    txtInput: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        paddingLeft: 20,
        marginTop: 15,
        borderColor: 'gray',
        backgroundColor: '#FFF',
        color: 'black',
    },
    btnLoginGradient: {
        borderRadius: 25,
        width: 200,
        height: 50,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLoginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    txtCrearCuentaContainer: {
        marginTop: 60,
    },
    txtCrearCuenta: {
        fontSize: 14,
        color: "#FFF",
        textAlign: 'center',
    },
});
