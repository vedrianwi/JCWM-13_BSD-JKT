// import Module
import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

// INTERMEDIETE COMPONENT : CARD and LIST
const App = () => {
  const [users, setUsers] = React.useState([
    'Kevin Candra',
    'Muhammad Kiki P.N.',
    'Frengky',
    'Gilang',
    'Tira H.',
    'Feysah',
    'Rozak',
    'Vedria',
    'Yanuar Darma',
    'Ade Nugraha',
    'Alee',
    'Elsa',
    'Olaf',
    'Anna',
  ]);

  const renderList = () => {
    return data.map((item, index) => {
      return <Card text={item} key={index} />;
    });
  };

  const handleRefresh = () => {
    console.log('refresh');
  };

  return (
    <View style={styles.root}>
      {/* <ScrollView style={styles.list}>{renderList()}</ScrollView> */}
      <FlatList
        refreshing={false}
        onRefresh={() => handleRefresh()}
        data={users}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Card text={item} />}
      />
    </View>
  );
};

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 0.5,
    padding: 15,
    backgroundColor: '#eeeeee',
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
  },
  list: {},
});

export default App;
