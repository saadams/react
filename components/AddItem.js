/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');

    const onInput = textValue => setText(textValue);

  return (
      <View>
          <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onInput} />
          <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
              <Text style={styles.btnText}><Icon name="plus" size={20}/>Add Item</Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height:60,
        padding:8,
        fontSize:16,
        backgroundColor: 'rgba(144, 238, 144, .2)',
    },
    btn: {
        backgroundColor: 'lightgreen',
        padding:9,
        margin: 5,

    },
    btnText: {
        color: 'darkgreen',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddItem;
