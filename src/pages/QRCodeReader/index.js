/* eslint-disable default-case */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0633',
  },
  centerText: {

    fontSize: 30,
    color: '#E9E9E9',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  loading: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0B0633',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
  },
  loadingText1: {
    color: '#E9E9E9',
    fontSize: 35,
    marginTop: 20,
  },
  loadingText2: {
    color: '#E9E9E9',
    fontSize: 13,
  },
});

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const QRCodeReader = (props) => {
  const [loading, setLoading] = useState(false);

  const permissionCamera = () => {
    check(PERMISSIONS.ANDROID.CAMERA)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        // …
      });
  };

  permissionCamera();

  function readQrCode() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          isValidate: true,
        });
      });
    }, 4000);
  }

  function onRead(e) {
    console.log(e.data);
    setLoading(true);
    async function handleQrCode() {
      const response = await readQrCode();
    }
    setLoading(false);
    props.navigation.navigate('ResultValidate');
  }

  return (
    <View style={styles.container}>
      {
        loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#FF4949" />
            <Text style={styles.loadingText1}>Por favor, aguarde</Text>
            <Text style={styles.loadingText2}>Esta operação pode levar</Text>
            <Text style={styles.loadingText2}>alguns segundos</Text>
          </View>
        ) : (
          <QRCodeScanner
            showMarker
            markerStyle={{
              width: 350, alignSelf: 'center', height: 450, borderRadius: 20, borderColor: '#FF4949',
            }}
            onRead={(e) => onRead(e)}
        // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={(
              <View>
                <Text style={styles.centerText}>
                  Validação de Identidade
                </Text>
              </View>

        )}
            bottomContent={(
              <View style={{
                flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '65%',
              }}
              >
                <View>
                  <Text style={{ color: '#A8A8A8' }}>Utilize o QR code para validar a identidade de clientes</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  {/* <Icon
                    name="activity"
                    color="#E9E9E9"
                    size={24}
                  /> */}
                  <Text style={{ color: '#A8A8Bf' }}>Posicione a câmera do celular ao centro do QR </Text>
                  <Text style={{ color: '#A8A8Bf', textAlign: 'center' }}>code sem movimentos bruscos</Text>
                </View>
              </View>
        )}
            cameraStyle={{ width: 200, alignSelf: 'center', height: 400 }}
            // cameraContainerStyle={}

          />
        )
      }

    </View>
  );
};

export default QRCodeReader;
