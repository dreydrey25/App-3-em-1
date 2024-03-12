import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const AgeCalculatorPage = () => {
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const calculateAgeCategory = () => {
    // Coloque aqui a lógica para calcular a categoria de idade
    // Exemplo:
    // if (age >= 18) {
    //   setMessage('Adult');
    // } else if (age >= 13) {
    //   setMessage('Teenager');
    // } else if (age >= 3) {
    //   setMessage('Child');
    // } else {
    //   setMessage('Infant');
    // }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <Button title="Calculate" onPress={calculateAgeCategory} />
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default AgeCalculatorPage;
