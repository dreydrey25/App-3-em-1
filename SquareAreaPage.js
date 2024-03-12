import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const SquareAreaPage = () => {
  const [side, setSide] = useState('');
  const [area, setArea] = useState('');

  const calculateArea = () => {
    const result = parseFloat(side) ** 2;
    setArea(result.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the side length"
        keyboardType="numeric"
        value={side}
        onChangeText={(text) => setSide(text)}
      />
      <Button title="Calculate" onPress={calculateArea} />
      <Text>Area: {area}</Text>
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

export default SquareAreaPage;
