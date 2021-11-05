import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Navbar from './Navbar';

const Stack = createStackNavigator();

class MainNavigation extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator>
        {/* headerTransparent facilitates navigation to be added inside the safeareaview */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerMode: 'screen',
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar main={false} navigation={navigation} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
