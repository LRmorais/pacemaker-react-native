import React, { useState } from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
// import { Container } from './styles';

const slide = [
  {
    key: '1',
    text: 'Tenha mais liberdade ao sair de casa',
    image: require('../../assets/tutorial1.png'),
  },
  {
    key: '2',
    text: 'Máxima segurança dos seus dados.',
    image: require('../../assets/tutorial2.png'),
  },
  {
    key: '3',
    text: 'Mais conforto e facilidade para você',
    image: require('../../assets/tutorial3.png'),
  },
];

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    // backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // [...]
});

const TutorialApp = ({ navigation }) => {
  const [showHome, setShowHome] = useState(false);

  _renderNextButton = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: '#E9E9E9' }}>Pular</Text>
      <View style={styles.buttonCircle}>
        <Icon
          name="chevron-forward-outline"
          color="#FF4949"
          size={24}
        />
      </View>
    </View>
  );

  _renderDoneButton = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: '#E9E9E9' }}>Vamos lá</Text>
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          color="#FF4949"
          size={24}
        />
      </View>
    </View>
  );

  function renderSlide({ item }) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0B0633', alignItems: 'center' }}>
        <Image source={item.image} style={{ resizeMode: 'contain', height: '73%' }} />
        <Text style={{ color: '#E9E9E9', fontSize: 18 }}>{item.text}</Text>
      </View>
    );
  }

  if (showHome) {
    return <Text>Home</Text>;
  }
  return (
    <AppIntroSlider
      renderItem={renderSlide}
      data={slide}
      activeDotStyle={{
        backgroundColor: '#FF4949',
        width: 25,
      }}
      dotStyle={{ backgroundColor: '#E9E9E9' }}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      onDone={() => navigation.navigate('HomeApp')}
    />
  );
};

export default TutorialApp;
