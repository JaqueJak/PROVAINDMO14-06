import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContatoScreen() {
  // Informações de contato e descrição
  const informacoes = {
    contato: {
      email: "senaisenai@gmail.com.br",
      telefone: "(19)9999-9999",
      endereco: "Rua do max-cine, 844, Jaguariúna, São Paulo"
    },
    descricao: "Nosso aplicativo traz uma nova forma de encontrar e descobrir filmes para o seu entretenimento diário. Com uma seleção cuidadosa de filmes dos mais diversos gêneros, estamos aqui para tornar sua experiência cinematográfica ainda mais incrível."
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato / Quem Somos</Text>
      <Text style={styles.subtitle}>Entre em contato:</Text>
      <Text style={styles.info}>Email: {informacoes.contato.email}</Text>
      <Text style={styles.info}>Telefone: {informacoes.contato.telefone}</Text>
      <Text style={styles.info}>Endereço: {informacoes.contato.endereco}</Text>
      <Text style={styles.description}>{informacoes.descricao}</Text>
    </View>
  );
}

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
  infoContainer: {
    backgroundColor: '#34495E',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
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
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ECF0F1',
  },
  info: {
    fontSize: 18,
    marginTop: 5,
    color: '#BDC3C7',
  },
  descriptionContainer: {
    backgroundColor: '#34495E',
    borderRadius: 15,
    padding: 20,
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
  description: {
    fontSize: 18,
    textAlign: 'justify',
    color: '#BDC3C7',
  },
});
