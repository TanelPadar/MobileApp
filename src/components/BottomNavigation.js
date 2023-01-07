import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';  // <-- import the CarList component
import ExerciseList from './ExerciseList';
import Icon from 'react-native-vector-icons/Ionicons';// <-- import react-native-vector-icons instead of expo/vector-icons


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { textStyling, viewStyle } = styles;

  return (
  <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
             <Icon name="md-trophy" size={40} color={color} />
            )
          }}
        />
      <Tab.Screen
        name="Workouts"
        component={ExerciseList}  // <-- customize this to use a different component or perform a different action
        options={{tabBarBadge: 3,
                    tabBarIcon: ({ color }) => (
                     <Icon name="ios-calendar-outline" size={40} color={color} />
                    )
                  }}

      />
    </Tab.Navigator>
  );
};

const styles = {
  textStyling: {
    fontSize: 22
  },
  viewStyle: {

    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'  // <-- change the layout to a row
  }
}

//make component available to other components
export default BottomNavigation;