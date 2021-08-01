import React, { useState } from 'react';
import {
  SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode-svg';

const styles = StyleSheet.create({
  primaryText: {
    fontSize: 13,
    color: '#FF4949',
  },
  secondaryText: {
    fontSize: 18,
    color: '#E9E9E9',
  },
});

const QrcodeValidate = ({ navigation }) => {
  const [qrValue, setQrValue] = useState('pacemaker.com/carteirinhanumber1313131123');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0633' }}>
      <View style={{ flexDirection: 'column', padding: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-circle-outline"
            color="#FF4949"
            size={45}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: 200 }}>
            <View>
              <Text style={styles.primaryText}>Nome do(a) portador(a)</Text>
              <Text style={styles.secondaryText}>Maria da Silva e Silva</Text>
            </View>

            <View>
              <Text style={styles.primaryText}>Número da carteirinha</Text>
              <Text style={styles.secondaryText}>0015248-2</Text>
            </View>

            <View>
              <Text style={styles.primaryText}>Data de nascimento</Text>
              <Text style={styles.secondaryText}>20/05/1995</Text>
            </View>

            <View>
              <Text style={styles.primaryText}>CPF</Text>
              <Text style={styles.secondaryText}>264.587.892-10</Text>
            </View>
          </View>
          <View>
            <View>
              <Image source={require('../../assets/avatar.png')} />
            </View>
          </View>
        </View>

        <View style={{
          justifyContent: 'space-around', alignItems: 'center', height: '60%',
        }}
        >
          <Text style={{ color: '#FF4949', fontSize: 25 }}>Qr Code</Text>
          <QRCode
            value={qrValue || 'NA'}
            size={200}
            color="#FF4949"
            backgroundColor="#fff"
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={15}
            logoBackgroundColor="yellow"
          />
          <View style={{
            flexDirection: 'row', width: '60%', justifyContent: 'center', alignItems: 'center',
          }}
          >
            <Text style={{ color: '#fff', fontSize: 20 }}>Utilize o QR Code para verificar a identidade do usuário.</Text>
          </View>
        </View>

      </View>

    </SafeAreaView>
  );
};

export default QrcodeValidate;
