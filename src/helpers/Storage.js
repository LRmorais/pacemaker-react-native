import AsyncStorage from '@react-native-async-storage/async-storage';

// armazena valores (objeto)
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
    return e;
  }
};

// armazena valores (string)
export const saveDataStr = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

// buscando strings

export const getDataStg = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
    }
    return value;
  } catch (e) {
    // error reading value
  }
};

// buscando objetos
export const getObjData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    return e;
  }
};

// remove valores
export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    return e;
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};
