import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableHighlight,
} from 'react-native';

const Date = ({date, deletePatient}) => {
  const deleteDialog = (id) => {
      console.log(`Eliminando ${id}`);      
      deletePatient(id);
  };

  return (
    <View style={styles.date}>
      <View>
        <Text style={styles.label}>Paciente: </Text>
        <Text style={styles.text}>{date.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario: </Text>
        <Text style={styles.text}>{date.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas: </Text>
        <Text style={styles.text}>{date.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
          style={styles.deleteButton}
          onPress={() => deleteDialog(date.id)}>
          <Text style={styles.deleteText}>Eliminar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  date: {
    backgroundColor: '#fff',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Date;
