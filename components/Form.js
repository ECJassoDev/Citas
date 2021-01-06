import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  ScrollView,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Form = ({onSubmit}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymtoms] = useState('');

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
    const options = {hour: 'numeric', minute: '2-digit'};
    setTime(time.toLocaleString('es-ES', options));
    hideTimePicker();
  };

  const showAlert = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {text: 'Cerrar'},
    ]);
  };

  const handleSubmit = () => {
    if (
      patient.trim() === '' ||
      owner.trim() === '' ||
      phone.trim() === '' ||
      symptom.trim() === '' ||
      !date ||
      !time
    ) {
      showAlert();
      return;
    } else {
      onSubmit({patient, owner, symptoms, phone, date, time});
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Paciente</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setPatient(value);
          }}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Dueño</Text>
        <TextInput
          name="owner"
          style={styles.input}
          onChangeText={(value) => {
            setOwner(value);
          }}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Teléfono o contacto</Text>
        <TextInput
          name="phone"
          style={styles.input}
          onChangeText={(value) => {
            setPhone(value);
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
            setSymtoms(value);
          }}
          multiline
        />
      </View>
      <View style={styles.formContainer}>
        <TouchableHighlight
          style={styles.submitButton}
          onPress={() => handleSubmit()}>
          <Text style={styles.submitText}>Guardar</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  scrollContainer: {
    height: '150%',
  },
  formContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#AA076B',
    marginVertical: 10,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
