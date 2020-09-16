/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// can also use props
const ListItem = ({item, deleteItem}) => {
  return (
   <TouchableOpacity style={styles.ListItem}>
      <View style={styles.ListItemView}>
          <Text style={styles.ListItemText}>{item.text} </Text>
          <Icon name="remove" size={20} color="red" onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    ListItem: {
        padding: 15,
        backgroundColor: 'rgba(144, 238, 144, .2)',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    ListItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ListItemText: {
        fontSize: 18,
    },

});

export default ListItem;
