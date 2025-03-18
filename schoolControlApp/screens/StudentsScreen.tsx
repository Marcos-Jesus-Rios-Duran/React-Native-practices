import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import { getStudents } from '../serrvices/ApiStudents';
import { Student } from '../models/Student';

const StudentsScreen = () => {
  const [students, setStudents] = useState<Student[]>([]);

  // Función para cargar los estudiantes
  const loadStudents = async () => {
    try {
      console.log("Cargando estudiantes..."); // Depuración inicial
      const data = await getStudents();
      console.log("Datos obtenidos:", data); // Depuración de los datos obtenidos
      setStudents(data);
    } catch (error) {
      console.error("Error al cargar los estudiantes:", error); // Depuración en caso de error
    }
  };

  // Hook useEffect para cargar los datos al montar el componente
  useEffect(() => {
    loadStudents();
  }, []); // Se ejecuta una vez al montar el componente

  // Renderizado de cada tarjeta
  const renderItems = ({ item }: { item: Student }) => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Text style={styles.cardTitle}>
              {item.name} {item.lastname}
            </Text> {/* Nombre del estudiante */}
            <Text style={styles.cardSubtitle}>
              Matrícula: {item.student_id}
            </Text> {/* Matrícula del estudiante */}
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>Grupo:</Text>
            <Text style={styles.infoValue}>{item.group}</Text> {/* Grupo */}
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>Grado:</Text>
            <Text style={styles.infoValue}>{item.grade}</Text> {/* Grado */}
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>Promedio:</Text>
            <Text style={styles.infoValue}>{item.average}</Text> {/* Promedio */}
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STUDENTS SCREEN</Text>
      {students.length === 0 ? ( // Mostrar mensaje de carga si la lista está vacía
        <Text style={styles.loadingText}>Cargando estudiantes...</Text>
      ) : (
        <FlatList
          data={students} // Lista de estudiantes
          renderItem={renderItems} // Renderiza cada tarjeta
          keyExtractor={(item) => item.student_id.toString()} // Usamos student_id como clave única
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#141414",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#333",
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  header: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e50914",
  },
  cardSubtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  infoText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  infoValue: {
    fontSize: 16,
    color: "white",
  },
  loadingText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});

export default StudentsScreen;
