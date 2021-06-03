import React from 'react';
import {View} from 'react-native';

import {Feather} from '@expo/vector-icons';

import {ContainerButton, Link} from './style';

export default function ListItem(){
  return(
    <View>
      <ContainerButton activeOpacity={0.9} onPress={() => alert("Testando")}>
        <Feather
         name="link"
         color="#fff"
         size={24}
        />
        <Link numberOfLines={1}>htpps://youtube.com</Link>
      </ContainerButton>
    </View>
  )
}