import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import Button from 'react-native-paper/lib/commonjs/components/Button';
import TextInput from 'react-native-paper/lib/commonjs/components/TextInput/TextInput';

// import action
import { LoginAction } from '../actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidUpdate() {
        // console.log('component update.');
        if (this.props.id) {
            console.log('login success.');
            this.props.navigation.navigate('home-nav', {
                screen: 'product-nav',
            });
        }
    }

    onBtnLogin = () => {
        console.log('username :', this.state.username);
        console.log('password :', this.state.password);
        this.props.LoginAction(this.state);
        this.setState({ username: '', password: '' });
    };

    render() {
        const { error, loading } = this.props;
        return (
            <View style={styles.root}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    label="Username"
                    mode="outlined"
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={(value) => this.setState({ username: value })}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(value) => this.setState({ password: value })}
                    secureTextEntry
                />
                <Text style={styles.error}>{error}</Text>
                <Button
                    mode="contained"
                    color="#0984e3"
                    style={styles.button}
                    onPress={this.onBtnLogin}
                    loading={loading}>
                    Login
                </Button>
                <Button
                    mode="text"
                    color="#0984e3"
                    style={styles.button2}
                    onPress={() => this.props.navigation.navigate('register')}>
                    Sign Up
                </Button>
            </View>
        );
    }
}

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
        marginTop: '15%',
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
    info: {
        marginVertical: 10,
        fontFamily: 'JosefinSans-Regular',
    },
});

const mapStateToProps = (state) => {
    return {
        id: state.userReducer.id,
        loading: state.userReducer.loading,
        error: state.userReducer.error,
    };
};

export default connect(mapStateToProps, { LoginAction })(Login);
