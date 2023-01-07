import React from 'react';
import { View, Text } from "react-native";
import { Calendar } from 'react-native-calendars';
import moment from 'moment';


const Home = () => {
  // Generate three random dates
  const randomDates = [...Array(3)].map(() => {
    const year = Math.floor(Math.random() * (2101 - 2000)) + 2000;
    const month = Math.floor(Math.random() * (12 - 1)) + 1;
    const day = Math.floor(Math.random() * (31 - 1)) + 1;
    return {
      date: `${year}-${month}-${day}`,
      marked: true,
      dotColor: 'red'
    };
  });

  // Convert the random dates into a format that can be used in the `markedDates` prop
  const markedDates = {};
  randomDates.forEach(date => {
    markedDates[date.date] = {
      marked: date.marked,
      dotColor: date.dotColor
    };
  });

  return (
    <View>
      <Calendar
        // Set the current month and year
        current={moment(new Date()).format('YYYY-MM-DD')}
        // Set the minimum and maximum dates that can be selected
        minDate={'2000-01-01'}
        maxDate={'2100-01-01'}
        // Set the selected date
      markedDates={{
          // Mark the current date
          [new Date()]: {
            selected: true,
            disableTouchEvent: false,  // <-- set disableTouchEvent to false
            selectedDotColor: 'orange'
          },
          // Mark three random dates
          '2023-01-01': {
            selected: true,
            disableTouchEvent: false,
            selectedDotColor: 'orange'
          },
          '2023-01-15': {
            selected: true,
            disableTouchEvent: false,
            selectedDotColor: 'orange'
          },
          '2023-01-30': {
            selected: true,
            disableTouchEvent: false,
            selectedDotColor: 'orange'
          }
        }}
      // Function called when a date is selected
      onDayPress={(day) => { console.log('selected day', day) }}
      // Function called when a month changes
      onMonthChange={(month) => { console.log('current month', month) }}
      // Render a header with the current month name
      renderHeader={(date) => {
        return (
          <Text>{moment(date).format('MMMM YYYY')}</Text>
        );
      }}
    />
    </View>
  );
};

export default Home;
