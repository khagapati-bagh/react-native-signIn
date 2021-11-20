import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const Post = ({nvatigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Post Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
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

export default Post;
