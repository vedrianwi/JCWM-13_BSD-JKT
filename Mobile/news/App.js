import React from 'react';
import Axios from 'axios';
import WebView from 'react-native-webview';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const KEY = '&apikey=2fd11846d6f54c05956d09209c1b5fbe';
const URL = 'http://newsapi.org/v2/top-headlines?';
const OPTIONS = 'country=id&category=technology';

// const { useState, use } = React;
const Home = ({ navigation }) => {
    // define state
    const [news, setNews] = React.useState([]);

    // useEffect to get/initialize data
    React.useEffect(() => {
        Axios.get(URL + OPTIONS + KEY)
            .then((res) => {
                console.log('news : ', res.data);
                setNews(res.data.articles);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <View style={styles.root}>
            <FlatList
                data={news}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <NewsCard
                        title={item.title}
                        description={item.description}
                        image={item.urlToImage}
                        onTouch={() =>
                            navigation.navigate('ReadNews', { url: item.url })
                        }
                    />
                )}
            />
        </View>
    );
};

const NewsCard = (props) => {
    return (
        <Card style={styles.card}>
            <Card.Title title={props.title} />
            <Card.Cover source={{ uri: props.image }} />
            <Card.Content>
                <Paragraph>{props.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={props.onTouch}>Read</Button>
            </Card.Actions>
        </Card>
    );
};

const ReadNews = ({ route }) => {
    return <WebView source={{ uri: route.params.url }} style={styles.web} />;
};

// stack navigation
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ReadNews" component={ReadNews} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f2f2f2',
    },
    card: {
        marginVertical: 10,
    },
    web: {
        flex: 1,
    },
});

export default App;

/* class component
consturctor (props) {
    super (props)
    this.state = {
        news  : []
    }
}
this.setState() => merubah state

component lifecylce method vs useEffect
- define nama lifecyle by react depend on render event or on state change
- useEffect alway run after render
*/
