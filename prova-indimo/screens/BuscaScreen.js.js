import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

export default function BuscaScreen() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovieInfo = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=f8dc2553&s=${query}`);
      const data = await response.json();
      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
      } else {
        setMovies(data.Search || []);
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching movie info:", error);
      setError("Erro ao buscar informações do filme. Por favor, tente novamente.");
      setMovies([]);
    }
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image 
        style={styles.poster}
        source={{ uri: item.Poster }}
        resizeMode="cover"
      />
      <Text style={styles.movieTitle}>{item.Title}</Text>
      <Text style={styles.movieGenre}>Gênero: {item.Type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca de Filmes</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título do filme"
        onChangeText={text => setQuery(text)}
        value={query}
        placeholderTextColor="#BDC3C7" // Corresponds to the placeholder color in IndicaçãoScreen
      />
      <Button
        title="Buscar"
        onPress={fetchMovieInfo}
        color="#34495E"
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        style={styles.movieList}
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.imdbID}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDC3C7', // Background color similar to IndicaçãoScreen
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#34495E', // Text color similar to IndicaçãoScreen
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#34495E', // Border color similar to IndicaçãoScreen
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#ECF0F1', // Input background color similar to IndicaçãoScreen
    color: '#34495E', // Text color similar to IndicaçãoScreen
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  movieList: {
    width: '100%',
  },
  movieItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#34495E',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495E', // Movie title color similar to IndicaçãoScreen
  },
  movieGenre: {
    color: '#34495E', // Movie genre color similar to IndicaçãoScreen
  },
  poster: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
});
