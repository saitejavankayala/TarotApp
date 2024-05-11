// App.js (or whatever your main file is)

import React from 'react';
import {View} from 'react-native';
import {TarotCards} from './TarotCards';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <TarotCards />
    </View>
  );
}
