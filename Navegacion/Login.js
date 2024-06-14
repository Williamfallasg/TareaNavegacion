import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('./img_fondo.jpg')} style={styles.imgBackground} />
            <View style={styles.overlay} />
            <View style={styles.content}>
                <Image source={require('./logo_fruit.png')} style={styles.imgLogo} />
                <TextInput 
                    placeholder='correo electrónico' 
                    style={styles.txtInput} 
                    placeholderTextColor="gray" 
                />
                <TextInput 
                    placeholder='contraseña' 
                    style={styles.txtInput} 
                    secureTextEntry={true} 
                    placeholderTextColor="gray" 
                />

                <TouchableOpacity 
                    onPress={() => navigation.navigate("Recuperar")} 
                    style={styles.txtOlviContainer}
                >
                    <Text style={styles.txtOlvi}>Productos</Text>
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

                <TouchableOpacity 
                    onPress={() => navigation.navigate("Crear")} 
                    style={styles.txtCrearCuentaContainer}
                >
                    <Text style={styles.txtCrearCuenta}></Text>
                    <Text style={styles.txtRigi}>Regístrar Producto</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    imgBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        width: '80%',
        alignItems: 'center',
        zIndex: 1,
    },
    imgLogo: {
        width: 80,
        height: 80,
        marginBottom: 90,
    },
    txtInput: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        paddingLeft: 20,
        marginTop: 20,
        borderColor: 'gray',
        backgroundColor: '#FFF',
        color: 'black',
    },
    txtOlviContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 10,
    },
    txtOlvi: {
        fontSize: 14,
        color: "#00c1bb",
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
        marginTop: 20,
        alignItems: 'center',
    },
    txtCrearCuenta: {
        fontSize: 14,
        color: "#FFF",
    },
    txtRigi: {
        fontSize: 14,
        color: "#00c1bb",
        fontWeight: "bold",
    },
});
