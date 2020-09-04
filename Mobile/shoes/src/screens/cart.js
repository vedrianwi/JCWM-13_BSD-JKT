import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import Button from 'react-native-paper/lib/commonjs/components/Button';
import Modal from 'react-native-paper/lib/commonjs/components/Modal';
import ActivityIndicator from 'react-native-paper/lib/commonjs/components/ActivityIndicator';

// import actions
import {
    GetCartAction,
    EditCartQtyAction,
    DeleteCartItemAction,
    ChekOutAction,
} from '../actions';

// import components
import CartHeader from '../components/cart_header';
import { CardList, CardListEdit } from '../components/cart_list';

// import styles
import { cartStyle } from '../styles';

const { useEffect, useState } = React;

const Cart = ({ navigation }) => {
    // define state
    const [state, setState] = useState({
        selectedId: null,
        quantity: null,
        harga: null,
    });

    // connect redux
    const { id, cart, loading, total, order_number } = useSelector((state) => {
        return {
            id: state.userReducer.id,
            cart: state.cartReducer.cart,
            loading: state.cartReducer.loading,
            total: state.cartReducer.total,
            order_number: state.cartReducer.order_number,
        };
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCartAction(id));
    }, []);

    const _onBtnPlus = () => {
        setState((prevstate) => {
            return { ...prevstate, quantity: prevstate.quantity + 1 };
        });
    };

    const _onBtnMin = () => {
        if (state.quantity <= 1) return;

        setState((prevstate) => {
            return { ...prevstate, quantity: prevstate.quantity - 1 };
        });
    };

    const _onBtnSave = () => {
        dispatch(
            EditCartQtyAction(
                id,
                state.selectedId,
                state.quantity,
                state.harga,
            ),
        );
        _resetState();
    };

    const _onBtnDelete = (itemId) => {
        dispatch(DeleteCartItemAction(id, itemId));
    };

    const _onBtnCheckOut = () => {
        if (!cart.length) return;
        dispatch(ChekOutAction(id, order_number));
        navigation.navigate('payment-type');
    };

    const _resetState = () =>
        setState({ selectedId: null, quantity: null, harga: null });

    const _renderCart = () => {
        return cart.map((item) => {
            if (item.id === state.selectedId) {
                return (
                    <CardListEdit
                        key={item.id}
                        title={item.nama}
                        harga={item.harga}
                        qty={state.quantity}
                        cancelPress={_resetState}
                        plusPress={_onBtnPlus}
                        minPress={_onBtnMin}
                        savePress={_onBtnSave}
                    />
                );
            } else {
                return (
                    <CardList
                        key={item.id}
                        title={item.nama}
                        harga={item.harga}
                        qty={item.qty}
                        editPress={() =>
                            setState({
                                selectedId: item.id,
                                quantity: item.qty,
                                harga: item.harga,
                            })
                        }
                        deletePress={() => _onBtnDelete(item.id)}
                    />
                );
            }
        });
    };

    const _onRefresh = () => {
        dispatch(GetCartAction(id));
        _resetState();
    };

    return (
        <View style={cartStyle.root}>
            <CartHeader
                onTouch={() => navigation.navigate('product-nav')}
                onRefresh={_onRefresh}
            />
            <ScrollView style={cartStyle.cardContainer}>
                {_renderCart()}
            </ScrollView>
            <View style={cartStyle.checkout}>
                <Text>Total : {total}</Text>
                <Button mode="contained" onPress={_onBtnCheckOut}>
                    Check Out
                </Button>
            </View>
            <Loading visible={loading} />
        </View>
    );
};

const Loading = ({ visible }) => {
    return (
        <Modal visible={visible}>
            <View style={cartStyle.loading}>
                <ActivityIndicator size={28} />
                <Text style={cartStyle.loadingtext}>Loading . . .</Text>
            </View>
        </Modal>
    );
};

export default Cart;
