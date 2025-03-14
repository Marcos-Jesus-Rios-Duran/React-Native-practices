import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  StudentsScreen  from './screens/StudentsScreen';
import  FormStudentsScreen  from './screens/FormStudentsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Students Form" component={FormStudentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;