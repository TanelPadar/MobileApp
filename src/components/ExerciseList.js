import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';


const ExerciseList = () => {
const date1 = moment().format('YYYY-MM-DD');  // current date
const date2 = moment().add(1, 'days').format('YYYY-MM-DD');  // tomorrow's date
  // Hardcoded data for exercises
  const exercises1 = [
    { name: 'Squats', sets: 3, reps: 8, calories: 100 },
    { name: 'Lunges', sets: 3, reps: 12, calories: 150 },
    { name: 'Plank', sets: 3, reps: '30 seconds', calories: 50 },
  ];
  const exercises2 = [
    { name: 'Push-ups', sets: 3, reps: 8, calories: 100 },
    { name: 'Bicep curls', sets: 3, reps: 12, calories: 150 },
    { name: 'Tricep dips', sets: 3, reps: '30 seconds', calories: 50 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date1}</Text>
      {exercises1.map((exercise) => (
        <View key={exercise.name} style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseInfo}>
            {exercise.sets} sets of {exercise.reps} reps ({exercise.calories} calories burned)
          </Text>
        </View>
      ))}
      <Text style={styles.date}>{date2}</Text>
      {exercises2.map((exercise) => (
        <View key={exercise.name} style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseInfo}>
            {exercise.sets} sets of {exercise.reps} reps ({exercise.calories} calories burned)
          </Text>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  date: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  exerciseContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exerciseInfo: {
    fontSize: 14,
  },
});

export default ExerciseList;
