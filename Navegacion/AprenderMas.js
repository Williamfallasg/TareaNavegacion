import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AprenderMas = () => {
    const [productos, setProductos] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredProductos, setFilteredProductos] = useState([]);
    
    const navigation = useNavigation();

    useEffect(() => {
        fetchProductos();
    }, []);

    useEffect(() => {
        setFilteredProductos(
            productos.filter(producto => 
                producto.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, productos]);

    const fetchProductos = async () => {
        try {
            const response = await fetch('https://www.fruityvice.com/api/fruit/all');
            const data = await response.json();
            setProductos(data);
            setFilteredProductos(data);
        } catch (error) {
            console.error(error);
        }
    };

    const toggleFavorito = (producto) => {
        if (favoritos.includes(producto)) {
            setFavoritos(favoritos.filter(fav => fav !== producto));
            Alert.alert('Favorito', 'Producto eliminado de favoritos');
        } else {
            setFavoritos([...favoritos, producto]);
            Alert.alert('Favorito', 'Producto agregado a favoritos');
        }
    };

    const renderProducto = ({ item }) => (
        <View style={styles.productoContainer}>
            <Text style={styles.productoText}>Nombre: {item.name}</Text>
            <Text style={styles.productoText}>Familia: {item.family}</Text>
            <Text style={styles.productoText}>Carbohidratos: {item.nutritions.carbohydrates}</Text>
            <Text style={styles.productoText}>Proteínas: {item.nutritions.protein}</Text>
            <Text style={styles.productoText}>Grasas: {item.nutritions.fat}</Text>
            <Text style={styles.productoText}>Calorías: {item.nutritions.calories}</Text>
            <Text style={styles.productoText}>Azúcar: {item.nutritions.sugar}</Text>
            <TouchableOpacity onPress={() => toggleFavorito(item)}>
                <FontAwesome 
                    name={favoritos.includes(item) ? "heart" : "heart-o"} 
                    size={24} 
                    color="red" 
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar producto por nombre"
                onChangeText={(text) => setSearch(text)}
                value={search}
                placeholderTextColor="gray"
            />
            <FlatList
                data={filteredProductos}
                renderItem={renderProducto}
                keyExtractor={(item) => item.name}
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
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#FFF',
        color: 'black',
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
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
});

export default AprenderMas;
