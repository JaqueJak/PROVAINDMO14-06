import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DestaquesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Resident Evil: O Hóspede Malditor</Text>
        <Text style={styles.movieDescription}>Alice e Rain Ocampo têm a missão de destruir um laboratório genético operado pela poderosa corporação Umbrella.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Godzilla vs. King Kong</Text>
        <Text style={styles.movieDescription}>Dois titãs lendários se enfrentam em uma batalha épica que abala o mundo.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>As Crônicas de Nárnia</Text>
        <Text style={styles.movieDescription}>As Crônicas de Nárnia é uma série de filmes de fantasia produzida pelo Walden Media e distribuída pela Disney e Fox.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ECF0F1',
  },
  movie: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#34495E',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ECF0F1',
  },
  movieDescription: {
    fontSize: 18,
    textAlign: 'justify',
    color: '#BDC3C7',
  },
});


export default DestaquesScreen;