import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

const StudentsScreen = () => {
  // Datos ficticios basados en el esquema
  const students = [
    { student_id: 230195, name: "Marcos", lastname: "Pérez", grade: 90, group: "A", average: 88 },
    { student_id: 230196, name: "María", lastname: "Gómez", grade: 85, group: "B", average: 82 },
    { student_id: 230743, name: "Carlos", lastname: "Hernández", grade: 87, group: "A", average: 90 },
    { student_id: 230198, name: "Ana", lastname: "Martínez", grade: 93, group: "C", average: 92 },
    { student_id: 230199, name: "Luis", lastname: "Ramírez", grade: 89, group: "B", average: 85 },
  ];

  const renderItems = ({ item }: { item: any }) => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Text style={styles.cardTitle}>{item.name} {item.lastname}</Text> {/* Nombre del estudiante */}
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
      <FlatList
        data={students} // Lista de estudiantes
        renderItem={renderItems} // Renderiza cada tarjeta
        keyExtractor={(item) => item.student_id.toString()} // Usamos student_id como clave única
      />
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
});

export default StudentsScreen;