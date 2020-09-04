import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import {
    Text,
    Button,
    Icon,
    Input,
    Header,
    Card,
    Overlay,
} from 'react-native-elements';

const App = () => {
    const [visible, setVisible] = React.useState(true);
    const [overlay, setOverlay] = React.useState(true);

    const handleVisible = () => {
        setVisible((prevstate) => !prevstate);
    };

    const showAlert = () => {
        Alert.alert(
            'Title',
            'message',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed'),
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <ScrollView style={styles.root}>
            <Header
                placement="center"
                leftComponent={{
                    icon: 'menu',
                    type: 'material',
                    color: 'white',
                }}
                centerComponent={
                    <Text style={{ color: 'white' }}>
                        React Native Elements
                    </Text>
                }
                rightComponent={<Button title="click me" />}
            />
            <Text>Hello React</Text>

            {/* standard vs outline */}
            <Button title="Click Me!" />
            <Button title="Click Me!" type="outline" />

            {/* button with icon */}
            <Button
                title="Delete"
                icon={{ name: 'delete', type: 'material', color: 'white' }}
            />
            <Button
                title="add"
                icon={
                    <Icon
                        type="material"
                        name="add"
                        color="white"
                        iconStyle={{ fontSize: 18 }}
                    />
                }
                iconRight
                loading
                disabled
            />

            {/* styling in react-native-elements : contaner, compStyle, textStyle */}
            <Button
                title="coba"
                titleStyle={styles.title}
                containerStyle={styles.bcontainer}
                buttonStyle={styles.button}
            />

            {/* input elements */}
            <Input
                placeholder="ex. username"
                label="username"
                leftIcon={{ name: 'person', type: 'material' }}
            />
            <Input
                placeholder="ex. passowrd"
                label="password"
                secureTextEntry={visible}
                leftIcon={{ name: 'lock', type: 'material' }}
                rightIcon={
                    visible ? (
                        <Icon
                            type="material"
                            name="visibility"
                            onPress={handleVisible}
                        />
                    ) : (
                        <Icon
                            type="material"
                            name="visibility-off"
                            onPress={handleVisible}
                        />
                    )
                }
            />
            <Card
                title="CARD WITH DIVIDER"
                image={require('./src/image01.jpg')}>
                <View>
                    <Text>INI CARD</Text>
                    <Button title="click me" />
                </View>
            </Card>

            {/* overlay aka MODAL */}
            <Overlay
                isVisible={overlay}
                onBackdropPress={() => setOverlay(false)}>
                <Text>Ini Overlay</Text>
            </Overlay>
            <Button title="alert" onPress={showAlert} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        // padding: 10,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 15,
        color: '#6c5ce7',
    },
    bcontainer: {
        padding: 20,
        backgroundColor: 'pink',
        borderRadius: 0,
    },
    button: {
        backgroundColor: '#ffeaa7',
        borderRadius: 50,
    },
});

export default App;
