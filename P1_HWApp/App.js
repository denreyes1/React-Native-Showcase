import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          color: '#ff0000',
          fontFamily: 'Arial',
          fontSize: 20,
          fontStyle: 'italic',
          fontWeight: '100',
          letterSpacing: 10,
          lineHeight: 50,
          textAlign: 'right',
        }}>
        Hello World!!
      </Text>
    </SafeAreaView>
  );
};

export default App;
