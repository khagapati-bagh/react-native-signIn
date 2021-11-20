import React, {useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './app/component/RootStackScreen';
import Tabs from './app/component/Navigation/components/Tabs';
import {ActivityIndicator} from 'react-native-paper';
import {AuthContext} from './app/component/context';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('randomtocken');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('randomtocken');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alginItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? <Tabs /> : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
