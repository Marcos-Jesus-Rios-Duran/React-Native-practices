import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);

  // Función recursiva para calcular el factorial
  const calculateFactorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * calculateFactorial(num - 1);
  };

  // Maneja el cálculo cuando el botón es presionado
  const handleCalculate = () => {
    const num = parseInt(number);
    if (!isNaN(num) && num >= 0) {
      setFactorial(calculateFactorial(num));
    } else {
      setFactorial('Por favor, ingresa un número entero válido y positivo.');
    }
  };

  // Limpiar tanto el input como el resultado
  const handleClear = () => {
    setNumber('');
    setFactorial(null);
  };

  // Actualizar el resultado cuando se borra el número
  const handleChangeText = (text) => {
    setNumber(text);
    if (text === '') {
      setFactorial(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Factoriales</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa un número entero"
        placeholderTextColor="#aaa"
        value={number}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>¡Calcular!</Text>
      </TouchableOpacity>
      {factorial !== null && (
        <Text style={styles.result}>
          {typeof factorial === 'number'
            ? `El factorial de ${number} es ${factorial}`
            : factorial}
        </Text>
      )}
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>Limpiar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginBottom: 20,
    fontFamily: 'serif',
  },
  input: {
    borderWidth: 2,
    borderColor: '#f39c12',
    borderRadius: 10,
    padding: 12,
    width: '80%',
    marginBottom: 15,
    fontSize: 18,
    color: '#f5f5f5',
    backgroundColor: '#2c2c3a',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f39c12',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  result: {
    marginTop: 25,
    fontSize: 18,
    color: '#f5f5f5',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  registerLink: {
    color: '#3498db', // Color azul para el enlace de registro
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
