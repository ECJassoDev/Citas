import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Date from './components/Date';
import Form from './components/Form';

const App = () => {
  const [showForm, setShowForm] = useState(true);
  const [citas, setCitas] = useState([]);

  const deletePatient = (id) =>
    setCitas((currentDates) => {
      return currentDates.filter((date) => date.id !== id);
    });

  const onSubmit = (date) => {
    setCitas([...citas, date]);
  };

  const handleShowForm = () => setShowForm(!showForm);

  const hideKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={()=> hideKeyboard()}>
      <View style={styles.container}>
        <Text style={styles.title}>Proyecto Citas</Text>
        <TouchableHighlight
          style={styles.showFormButton}
          onPress={() => handleShowForm()}>
          <Text style={styles.submitText}>{showForm ? 'Cancelar crear cita':'Agregar Cita'}</Text>
        </TouchableHighlight>
        <View style={styles.mainContent}>
          {showForm ? (
            <>
              <Text style={styles.title}>Nueva Cita</Text>
              <Form onSubmit={onSubmit} handleShow={() => setShowForm(false)} />
            </>
          ) : (
            <>
              <Text style={styles.title}>
                {citas.length > 0 ? 'Administra tus citas' : 'Agregar una cita'}
              </Text>
              <FlatList
                style={styles.listDate}
                data={citas}
                renderItem={({item}) => (
                  <Date date={item} deletePatient={deletePatient} />
                )}
                keyExtractor={(item) => item.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1,
    paddingHorizontal: '2.5%',
  },
  title: {
    marginTop: Platform.OS === 'android' ? 20 : 40,
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  mainContent: {
    flex: 1,
  },
  listDate: {
    flex: 1,
  },
  showFormButton: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
