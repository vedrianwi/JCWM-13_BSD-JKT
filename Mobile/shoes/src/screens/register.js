import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from 'react-native-paper/lib/commonjs/components/TextInput/TextInput';
import Button from 'react-native-paper/lib/commonjs/components/Button';
import IconButton from 'react-native-paper/lib/commonjs/components/IconButton';

import { RegisterAction } from '../actions';

const Register = ({ navigation }) => {
    // create state
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpassword, setCpassword] = React.useState('');

    // connect to redux
    const { id, loading, error } = useSelector((state) => {
        return {
            id: state.userReducer.id,
            loading: state.userReducer.loadingRegis,
            error: state.userReducer.errorRegis,
        };
    });
    const dispatch = useDispatch();

    const _onBtnRegister = () => {
        const user = { username, email, password, cpassword };
        console.log('user : ', user);

        dispatch(RegisterAction(user));

        // reset state
        setUsername('');
        setEmail('');
        setPassword('');
        setCpassword('');
    };

    React.useEffect(() => {
        if (id) {
            navigation.navigate('home-nav', { screen: 'product-nav' });
        }
    });

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                label="Username"
                value={username}
                style={styles.input}
                mode="outlined"
                onChangeText={(value) => setUsername(value)}
            />
            <TextInput
                label="Email"
                value={email}
                style={styles.input}
                mode="outlined"
                onChangeText={(value) => setEmail(value)}
            />
            <TextInput
                label="Password"
                value={password}
                style={styles.input}
                mode="outlined"
                secureTextEntry
                onChangeText={(value) => setPassword(value)}
                right={
                    <IconButton
                        icon="account"
                        color="red"
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                }
            />
            <TextInput
                label="Confirm password"
                value={cpassword}
                style={styles.input}
                mode="outlined"
                secureTextEntry
                onChangeText={(value) => setCpassword(value)}
            />
            <Text style={styles.error}>{error}</Text>
            <Button
                mode="contained"
                onPress={_onBtnRegister}
                loading={loading}
                color="#0984e3"
                style={styles.button}>
                Register
            </Button>
            <Button
                mode="text"
                color="#0984e3"
                style={styles.button2}
                onPress={() => navigation.navigate('login')}>
                Login
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: '10%',
        paddingVertical: '15%',
    },
    title: {
        fontFamily: 'JosefinSans-Bold',
        fontSize: 42,
        marginVertical: '5%',
    },
    input: {
        marginVertical: '2%',
    },
    button: {
        marginTop: '5%',
    },
    button2: {
        marginTop: '2%',
    },
    error: {
        fontFamily: 'JosefinSans-Regular',
        fontSize: 14,
        color: '#d63031',
        marginVertical: 10,
    },
});

export default Register;
