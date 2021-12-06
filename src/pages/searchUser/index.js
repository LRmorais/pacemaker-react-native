import React, { useState, useEffect } from 'react';
import {
  Text, View, TouchableOpacity, TextInput, FlatList,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useGlobalStateContext } from '../../hocs/globalState';

const SearchUser = ({ navigation }) => {
  const { token } = useGlobalStateContext();
  const [users, setUsers] = useState();

  async function getUser() {
    const response = await axios.get('https://pacemakers-back.herokuapp.com/users/', {
      headers: { 'x-access-token': `${token}` },
    });
    setUsers(response.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  const renderItem = ({ item }) => {
    console.log(item);
    return (

      <View style={styles.item}>
        <Text style={{ color: '#fff', fontSize: 20, padding: 5 }}>{item.personal_data?.name ? item.personal_data.name : item.email}</Text>
      </View>

    );
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back-circle-outline"
          color="#FF4949"
          size={45}
        />
        <Text style={styles.goBackText}> Voltar </Text>
      </TouchableOpacity>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          autoCorrect={false}
          placeholderTextColor="rgba(255, 255, 255, 0.5);"
        />
        <TouchableOpacity onPress={getUser}>
          <Icon
            style={{ marginLeft: 4 }}
            name="search-circle-outline"
            color="#FF4949"
            size={45}
          />
        </TouchableOpacity>

      </View>

      <View
        style={{
          borderBottomColor: '#FF4949',
          borderBottomWidth: 1,
        }}
      />

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SearchUser;
