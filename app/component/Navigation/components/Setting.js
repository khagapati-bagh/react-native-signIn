import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import {AuthContext} from '../../context';

const Setting = ({nvatigation}) => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting Screen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});

export default Setting;
