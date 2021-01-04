import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const Form = () => {
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
