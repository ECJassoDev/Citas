import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Form = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const options = {year: 'numeric', month: 'long', day: '2-digit'};    
    setDate(date.toLocaleDateString('es-ES', options)); 
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    console.warn('A time has been picked: ', time);
    hideTimePicker();
  };

  return (
    <>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Paciente</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            console.log(value);
          }}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Dueño</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            console.log(value);
          }}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Teléfono o contacto</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            console.log(value);
          }}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Fecha</Text>
        <Button title="Selecciona la fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          locale="es_ES"
        />
        <Text>{date}</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Hora</Text>
        <Button title="Selecciona hora" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
          locale="es-ES"
          is24Hour
        />
        <Text>{time}</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Síntomas</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            console.log(value);
          }}
          multiline
        />
      </View>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
