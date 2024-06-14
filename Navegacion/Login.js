
import React from "react"
import {View, Text,TextInput, Image,StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('./logo_fruit.png')} style={styles.imgLogo1} />
            <Image source={require('./img_fondo.jpg')} style={styles.imgLogo} />

            <TextInput placeholder='correo electronico' style={styles.txtInput} />
            <TextInput placeholder='Contraseña' style={styles.txtInp} secureTextEntry={true} />
               
               
            <TouchableOpacity style={styles.txtOlviContainer} onPress={() => navigation.navigate("Recuperar")}>
                <Text style={styles.txtOlvi}>¿Has olvidado tu contraseña?</Text>
            </TouchableOpacity>

            

            

            <TouchableOpacity onPress={() => navigation.navigate("Bienvenido")}>
                <LinearGradient
                    colors={['#871F1F', '#871F1F']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.btnLoginGradient}
                >
                    <Text style={styles.btnLoginText}>Ingresar</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Crear")}>
                <Text style={styles.txtCrearCuenta}>
                    No tiene cuenta.  
                </Text>
               <Text style={styles.txtRigi}>Registrarse</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        width: '100%',
    },
    txtBien: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#34434D',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 18,
        color: 'gray',
        alignItems: 'left',
        marginBottom: 20,
    },
    txtInput: {
      width: '90%',
      height: 50,
      borderRadius: 30,
      borderWidth: 1,
      paddingLeft: 30,
      marginTop: 20,
      marginLeft: 20,
      borderColor: 'grey',
      color: 'grey',
      backgroundColor: '#871FIF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      textDecorationLine: 'underline'
    },
    txtInp: {
        width: '90%',
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
        alignSelf: 'flex-end', // Aligns the container to the right
        marginTop: 10,
        width: '100%', // Ensures the text aligns correctly
    },
    txtOlvi: {
        fontSize: 16,
        color: "#00c1bb",
        marginTop: 2,
        textAlign: 'right',
    },

    txtCrearCuentaContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtCrearCuenta: {
        fontSize: 16,
        color: "#00c1bb",
        textAlign: 'center',
       }, 
    txtRigi: {
        color: "#00c1bb",
        fontWeight: "bold",
        fontSize: 16,
    },
    imgLogo1: {
        width: '50',
        height: 50,
    
    },
    imgLogo: {
        width: '100%',
        height: 306,
        resizeMode: 'cover',
    },
    btnLoginGradient: {
      borderRadius: 30,
      width: 219,
      height: 53,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#F5F5F5'
    },
    btnLoginText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F5F5F5',
        alignItems: 'center',
    },
    
});