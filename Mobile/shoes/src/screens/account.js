import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Button from 'react-native-paper/lib/commonjs/components/Button';

// import action
import { LogOutAction } from '../actions';

// import styles
import { account } from '../styles';

const Account = ({ navigation }) => {
    // get data from redux
    const { id } = useSelector((state) => {
        return {
            id: state.userReducer.id,
        };
    });
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (!id) {
            // redirect to sigin screen
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{ name: 'login' }],
            });

            navigation.dispatch(resetAction);
        }
    });

    return (
        <View style={account.root}>
            <Button
                mode="contained"
                color="#0984e3"
                onPress={() => dispatch(LogOutAction())}>
                Log Out
            </Button>
        </View>
    );
};

export default Account;
