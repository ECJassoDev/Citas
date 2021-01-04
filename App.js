import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Date from './components/Date';
import Form from './components/Form';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hoook', propietario: 'Emanuel', sintomas: 'No come'},
    {
      id: '2',
      paciente: 'Redux',
      propietario: 'Michelle',
      sintomas: 'No duerme',
    },
    {
      id: '3',
      paciente: 'Native',
      propietario: 'Josue',
      sintomas: 'No hace nada',
    },
  ]);

  const deletePatient = (id) =>
    setCitas((currentDates) => {
      return currentDates.filter((date) => date.id !== id);
    });
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Proyecto Citas</Text>
        <Form />
        <Text style={styles.title}>
          {citas.length > 0 ? 'Administra tus citas' : 'Agregar una cita'}
        </Text>
        <FlatList
          data={citas}
          renderItem={({item}) => (
            <Date date={item} deletePatient={deletePatient} />
          )}
          keyExtractor={(item) => item.id}
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
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
