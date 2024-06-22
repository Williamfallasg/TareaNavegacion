import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

import appFirebase from '../Firebase';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(appFirebase);

const Crear = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const producto = route.params?.producto;

    const inicioEstado = {
        nombreProducto: '',
        codigoProducto: '',
        cantidad: '',
        fechaCaducidad: ''
    };

    const [estado, setEstado] = useState(inicioEstado);

    useEffect(() => {
        if (producto) {
            setEstado(producto);
        }
    }, [producto]);

    const HandleChangeText = (value, name) => {
        setEstado({ ...estado, [name]: value });
    };

    const RegistrarProducto = async () => {
        if (producto) {
            try {
                await updateDoc(doc(db, 'productos', producto.id), { ...estado });
                Alert.alert('Alerta', 'El producto se actualizó con éxito');
                navigation.navigate('Bienvenido');
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                await addDoc(collection(db, 'productos'), { ...estado });
                Alert.alert('Alerta', 'El producto se registró con éxito');
                navigation.navigate('Bienvenido');
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('./image2.png')} style={styles.imgBackground} />
            <View style={styles.overlay} />
            <View style={styles.content}>
                <View style={styles.formContainer}>
                    <Text style={styles.txtBien}>{producto ? 'Modificar Producto' : 'Productos'}</Text>
                    <TextInput
                        placeholder='Nombre Producto'
                        style={styles.txtInput}
                        onChangeText={(value) => HandleChangeText(value, 'nombreProducto')}
                        value={estado.nombreProducto}
                        placeholderTextColor="gray"
                    />
                    <TextInput
                        placeholder='Código Producto'
                        style={styles.txtInput}
                        onChangeText={(value) => HandleChangeText(value, 'codigoProducto')}
                        value={estado.codigoProducto}
                        placeholderTextColor="gray"
                    />
                    <TextInput
                        placeholder='Cantidad'
                        style={styles.txtInput}
                        onChangeText={(value) => HandleChangeText(value, 'cantidad')}
                        value={estado.cantidad}
                        placeholderTextColor="gray"
                    />
                    <TextInput
                        placeholder='Fecha caducidad'
                        style={styles.txtInput}
                        onChangeText={(value) => HandleChangeText(value, 'fechaCaducidad')}
                        value={estado.fechaCaducidad}
                        placeholderTextColor="gray"
                    />
                    <TouchableOpacity onPress={RegistrarProducto}>
                        <LinearGradient
                            colors={['#871F1F', '#871F1F']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.btnLoginGradient}
                        >
                            <Text style={styles.btnLoginText}>{producto ? 'Actualizar' : 'Guardar'}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
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
        paddingTop: 5,
    },
    imgBackground: {
        width: 350,
        height: 300,
        marginBottom: 2,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 50,
    },
    overlay: {
        position: 'relative',
        width: '10%',
        height: '10%',
    },
    content: {
        width: '80%',
        alignItems: 'center',
        position: 'relative',
    },
    imgLogo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 1,
        marginHorizontal: 1,
        padding: 5,
        marginBottom: 5,
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 10,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 90,
        marginHorizontal: 50,
    },
    txtBien: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#34434D',
        marginBottom: 20,
    },
    txtInput: {
        width: '80%',
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
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLoginText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    txtCrearCuentaContainer: {
        marginTop: 10,
        color: '#FFF',
    },
    txtCrearCuenta: {
        fontSize: 14,
        color: "#FFF",
        textAlign: 'center',
    },
});
