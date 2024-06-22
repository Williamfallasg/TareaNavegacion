import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import appFirebase from '../Firebase';
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const db = getFirestore(appFirebase);

const ProductList = () => {
    const [productos, setProductos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        const productosList = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setProductos(productosList);
    };

    const eliminarProducto = async (id) => {
        await deleteDoc(doc(db, 'productos', id));
        Alert.alert('Alerta', 'Producto eliminado con éxito');
        fetchProductos(); // Refresca la lista
    };

    const renderProducto = ({ item }) => (
        <View style={styles.productoContainer}>
            <Text style={styles.productoText}>Nombre: {item.nombreProducto}</Text>
            <Text style={styles.productoText}>Código: {item.codigoProducto}</Text>
            <Text style={styles.productoText}>Cantidad: {item.cantidad}</Text>
            <Text style={styles.productoText}>Fecha de Caducidad: {item.fechaCaducidad}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Crear', { producto: item })}
                >
                    <LinearGradient
                        colors={['#871F1F', '#FF0000']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonText}>Modificar</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => eliminarProducto(item.id)}
                >
                    <LinearGradient
                        colors={['#871F1F', '#FF0000']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonText}>Eliminar</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={productos}
                renderItem={renderProducto}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    productoContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
    },
    productoText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '45%',
    },
    buttonGradient: {
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductList;
