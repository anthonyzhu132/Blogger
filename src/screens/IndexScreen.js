import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity  } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {

  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList 
      data={state}
      keyExtractor={(blogPosts) => blogPosts.title}
      renderItem={({ item }) => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather style={styles.icon} name="trash-2"/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
      }}
      />
    </View>

  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity style={styles.plusIcon} onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  plusIcon: {
    paddingRight: 20
  }
});

export default IndexScreen;