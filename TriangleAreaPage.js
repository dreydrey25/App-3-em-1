import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const TriangleAreaPage = () => {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState('');

  const calculateArea = () => {
    const result = (parseFloat(base) * parseFloat(height)) / 2;
    setArea(result.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the base"
        keyboardType="numeric"
        value={base}
        onChangeText={(text) => setBase(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter the height"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
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

export default TriangleAreaPage;