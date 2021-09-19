/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Text } from 'react-native';

import { List } from 'react-native-paper';

const ListFaq = (props) => {
  const colors = {
    primaryColor: '#FF4949',
    listBackground: '#E5DFDF',
  };

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30 }}>FAQ</Text>
      <List.Section>
        <List.Accordion
          style={{ backgroundColor: colors.listBackground }}
          theme={{ colors: { text: colors.primaryColor } }}
          titleStyle={{ color: colors.primaryColor }}
          title="Como utilizar o aplicativo?"
          left={(props) => <List.Icon {...props} icon="chat-outline" color={colors.primaryColor} />}
        >
          <List.Item style={{ backgroundColor: colors.listBackground }} title="mande um email para o suporte hehe" />
        </List.Accordion>

        <List.Accordion
          style={{ backgroundColor: colors.listBackground }}
          theme={{ colors: { text: colors.primaryColor } }}
          titleStyle={{ color: colors.primaryColor }}
          title="Como posso alterar minha senha?"
          left={(props) => <List.Icon {...props} icon="chat-outline" color={colors.primaryColor} />}
        >
          <List.Item style={{ backgroundColor: colors.listBackground }} title="mande um email para o suporte hehe" />
        </List.Accordion>

        <List.Accordion
          style={{ backgroundColor: colors.listBackground }}
          theme={{ colors: { text: colors.primaryColor } }}
          titleStyle={{ color: colors.primaryColor }}
          title="Como  alterar meus dados?"
          left={(props) => <List.Icon {...props} icon="chat-outline" color={colors.primaryColor} />}
        >
          <List.Item style={{ backgroundColor: colors.listBackground }} title="mande um email para o suporte hehe" />
        </List.Accordion>

        <List.Accordion
          style={{ backgroundColor: colors.listBackground }}
          theme={{ colors: { text: colors.primaryColor } }}
          titleStyle={{ color: colors.primaryColor }}
          title="Como  alterar meus dados?"
          left={(props) => <List.Icon {...props} icon="chat-outline" color={colors.primaryColor} />}
        >
          <List.Item style={{ backgroundColor: colors.listBackground }} title="mande um email para o suporte hehe" />
        </List.Accordion>

        <List.Accordion
          style={{ backgroundColor: colors.listBackground }}
          theme={{ colors: { text: colors.primaryColor } }}
          titleStyle={{ color: colors.primaryColor }}
          title="Como  alterar meus dados?"
          left={(props) => <List.Icon {...props} icon="chat-outline" color={colors.primaryColor} />}
        >
          <List.Item style={{ backgroundColor: colors.listBackground }} title="mande um email para o suporte hehe" />
        </List.Accordion>

      </List.Section>

    </View>
  );
};

export default ListFaq;
