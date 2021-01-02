import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import Date from './components/date';

const App = () => {
  const [citas, setCitas] = useState([
    { id: '1', paciente: 'Hoook', propietario: 'Emanuel', sintomas: 'No come' },
    { id: '2', paciente: 'Redux', propietario: 'Michelle', sintomas: 'No duerme' },
    { id: '3', paciente: 'Native', propietario: 'Josue', sintomas: 'No hace nada' },
  ]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Proyecto Citas</Text>
        <Text style={styles.title}>{citas.length > 0 ? 'Administra tus citas': 'Agregar una cita'}</Text>
        <FlatList
          data={citas}
          renderItem={({ item }) => <Date date={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  }
});

export default App;
