import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {
    Card,
    Header,
    Icon,
    Text,
    Overlay,
    Input,
    Button,
} from 'react-native-elements';

const App = () => {
    const [todo, setTodo] = React.useState([
        { task: 'Learn react-native', date: 1597724468538 },
        { task: 'Do a mini project', date: 1597724468538 },
        { task: 'Create backend project', date: 1597724468538 },
    ]);
    const [visible, setVisible] = React.useState(false);
    const [task, setTask] = React.useState('');

    const onButtonSubmit = () => {
        console.log('task : ', task);

        // protect input
        if (!task) {
            setVisible(false);
            return;
        }

        setTodo((prevtodo) => [...prevtodo, { task, date: Date.now() }]);
        setVisible(false);
        setTask('');
    };

    const onButtonDelete = (index) => {
        console.log('index : ', index);

        // let temp = todo
        // temp.splice(0, 1) // mutable state
        // setTodo(temp)

        let temp = [...todo];
        temp.splice(index, 1);

        setTodo(temp);
    };

    return (
        <View style={styles.root}>
            <Header
                containerStyle={styles.cheader}
                leftComponent={{
                    icon: 'description',
                    type: 'material',
                    color: 'white',
                }}
                centerComponent={{ text: 'Todo', style: styles.header }}
                rightComponent={
                    <Icon
                        name="add"
                        type="material"
                        iconStyle={{ color: 'white', fontSize: 32 }}
                        onPress={() => setVisible(true)}
                    />
                }
            />

            <FlatList
                data={todo}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <List
                        task={item.task}
                        date={item.date}
                        onTouch={() => onButtonDelete(index)}
                    />
                )}
            />

            <Overlay
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}>
                <View style={styles.overlayview}>
                    <Input
                        placeholder="ex. buy a milk"
                        leftIcon={{ name: 'create', type: 'material' }}
                        onChangeText={(value) => setTask(value)}
                    />
                    <Button title="Submit" onPress={onButtonSubmit} />
                </View>
            </Overlay>
        </View>
    );
};

const List = (props) => {
    return (
        <Card wrapperStyle={styles.card}>
            <View style={styles.content}>
                <Text style={styles.task}>{props.task}</Text>
                <Text style={styles.date}>
                    {new Date(props.date).toLocaleDateString()}
                </Text>
            </View>
            <Icon
                type="material"
                name="delete"
                iconStyle={{ color: '#ff7675' }}
                onPress={props.onTouch}
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    cheader: {
        margin: '0%',
        height: 100,
        backgroundColor: '#3498db',
    },
    header: {
        color: 'white',
        fontSize: 28,
        fontWeight: '600',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    task: {
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    overlayview: {
        width: 300,
    },
});

export default App;
