import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      setErrorMessage('Por favor, ingresa tu nombre de usuario y contraseña.');
    } else {
      // Aquí se podría realizar la validación con un backend o lógica adicional
      setErrorMessage('');
      alert('Inicio de sesión exitoso!');
    }
  };

  const handleRegisterLink = () => {
    alert('Aquí irías a la página de registro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario ej: marcos"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegisterLink}>
        <Text style={styles.registerLink}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginBottom: 30,
    fontFamily: 'serif',
  },
  input: {
    width: '80%',
    padding: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#f39c12',
    borderRadius: 10,
    fontSize: 18,
    color: '#f5f5f5',
    backgroundColor: '#2c2c3a',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f39c12',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    fontSize: 16,
  },
  registerLink: {
    color: '#f39c12',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
