import React from 'react';
import {
 Text, View
}from 'react-native';

import StatusBarPage from '../../components/StatusBarPage';

export default function MyLinks(){
  return(
    <View>
      <StatusBarPage
       barStyle='light-content'
       backgroundColor='#132742'
      />
      <Text>Página Links</Text>
    </View>
  )
}