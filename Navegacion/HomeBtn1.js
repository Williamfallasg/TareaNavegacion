import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeBtn1 = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground source={require('./image.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./logo_fruit.png')} style={styles.imgLogo} />
        
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#FFFFFF" style={styles.icon} />
          <TextInput
            placeholder='correo electrónico'
            placeholderTextColor="#FFFFFF"
            style={styles.txtInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#FFFFFF" style={styles.icon} />
          <TextInput
            placeholder='contraseña'
            placeholderTextColor="#FFFFFF"
            style={styles.txtInput}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity>
          <LinearGradient
            colors={['#871F1F', '#871F1F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.btnLoginGradient}
          >
            <Text style={styles.btnLoginText}>Ingresar</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.txtCrearCuenta}>
            Crear cuenta nueva 
            <Text style={styles.txtRigi}>Regístrate</Text>
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.txtOlvi}>Olvidé contraseña?</Text>
        </TouchableOpacity>
        
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
export default HomeBtn1;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop: 20,
  },
  icon: {
    paddingLeft: 20,
  },
  txtInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'white',
  },
  txtOlvi: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 20,
  },
  txtCrearCuenta: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 40,
  },
  txtRigi: {
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  imgLogo: {
    width: 100,
    height: 100,
    marginBottom: 60,
  },
  btnLoginGradient: {
    borderRadius: 30,
    width: 200,
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
