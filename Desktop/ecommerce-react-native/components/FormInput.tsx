import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native'; // Importar View y Text de react-native

type FormInputProps = {
  control: any,
  name: string,
  [key: string]: any
};

const FormInput: React.FC<FormInputProps> = ({ control, name, ...otherProps }) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          error={!!error}
          {...otherProps}
        />
        {error && <Text style={styles.error}>{error.message}</Text>}
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  textInput: {
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default FormInput;