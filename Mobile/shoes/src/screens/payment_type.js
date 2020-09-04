import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import ListSection from 'react-native-paper/lib/commonjs/components/List/ListSection';
import ListAccordion from 'react-native-paper/lib/commonjs/components/List/ListAccordion';
import ListIcon from 'react-native-paper/lib/commonjs/components/List/ListIcon';
import Button from 'react-native-paper/lib/commonjs/components/Button';
import RadioButton from 'react-native-paper/lib/commonjs/components/RadioButton/RadioButton';

// import component
import Loading from '../components/loading';

// import actions
import { AddPaymentAction } from '../actions';

const { useState } = React;

const PaymentType = ({ navigation }) => {
    const [value, setValue] = useState(1);

    // connect redux
    const { user_id, order_number, loading } = useSelector((state) => {
        return {
            user_id: state.userReducer.id,
            order_number: state.cartReducer.order_number,
            loading: state.paymentReducer.loading,
        };
    });
    const dispatch = useDispatch();

    const _onBtnPay = async () => {
        try {
            const body = {
                type: value,
                user_id,
                order_number,
            };
            console.log('body : ', body);
            dispatch(AddPaymentAction(body));

            // navigate to next page
            navigation.navigate('payment-receipt');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={styles.root}>
            <ListSection
                title="Payment Method"
                style={styles.list}
                titleStyle={styles.title}>
                <ListAccordion
                    title="Transfer Bank"
                    expanded
                    left={(props) => <ListIcon {...props} icon="bank" />}>
                    <RadioButton.Group
                        onValueChange={(value) => setValue(value)}
                        value={value}>
                        <View style={styles.radio}>
                            <RadioButton value={1} />
                            <Text>BANK BNI NO REK 1234567</Text>
                        </View>
                    </RadioButton.Group>
                </ListAccordion>
                <ListAccordion
                    title="Transfer Virtual Account"
                    expanded
                    left={(props) => (
                        <ListIcon {...props} icon="access-point" />
                    )}>
                    <RadioButton.Group
                        onValueChange={(value) => setValue(value)}
                        value={value}>
                        <View style={styles.radio}>
                            <RadioButton value={2} />
                            <Text>BCA VA 224567</Text>
                        </View>
                        <View style={styles.radio}>
                            <RadioButton value={3} />
                            <Text>BNI VA 321456</Text>
                        </View>
                        <View style={styles.radio}>
                            <RadioButton value={4} />
                            <Text>MANDIRI VA 765934</Text>
                        </View>
                    </RadioButton.Group>
                </ListAccordion>
            </ListSection>
            <Button
                mode="contained"
                icon="contactless-payment"
                onPress={_onBtnPay}>
                Pay Now
            </Button>
            <Loading visible={loading} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingVertical: '3%',
    },
    radio: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '15%',
        marginVertical: 5,
    },
    list: {
        flex: 1,
    },
    title: {
        fontSize: 24,
    },
});

export default PaymentType;
