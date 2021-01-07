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
import shortid from 'shortid';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Form = ({onSubmit, handleShow}) => {
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
      symptoms.trim() === '' ||
      !date ||
      !time
    ) {
      showAlert();
      return;
    } else {
      const date = {
        id: shortid.generate(),
        patient,
        owner,
        symptoms,
        phone,
        date,
        time,
      };
      onSubmit(date);
      Alert.alert('Bien', 'Cita creada', [{text: 'Cerrar'}]);
      handleShow();
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
      <View style={styles.actionContainer}>
        <TouchableHighlight
          style={styles.submitButton}
          onPress={() => handleSubmit()}>
          <Text style={styles.submitText}>Guardar</Text>
        </TouchableHighlight>
        {/* <TouchableHighlight
          style={styles.cancelButton}
          onPress={() => handleShow()}>
          <Text style={styles.submitText}>Cancelar</Text>
        </TouchableHighlight> */}
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({
  scrollContainer: {
    height: '100%',
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    backgroundColor: '#7d024e',
    marginVertical: 10,
    width: '100%',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cancelButton: {
    padding: 10,
    backgroundColor: 'black',
    marginVertical: 10,
    width: '40%',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 5,    
  },
});
