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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B4513',
  },
  movie: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFE4C4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8B4513',
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
});

export default DestaquesScreen;
