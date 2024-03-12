import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Age Calculator" onPress={() => navigation.navigate('AgeCalculator')} />
      <Button title="Triangle Area Calculator" onPress={() => navigation.navigate('TriangleArea')} />
      <Button title="Square Area Calculator" onPress={() => navigation.navigate('SquareArea')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
