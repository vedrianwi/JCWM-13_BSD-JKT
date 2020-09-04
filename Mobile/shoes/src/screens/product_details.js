import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Button from 'react-native-paper/lib/commonjs/components/Button';
import IconButton from 'react-native-paper/lib/commonjs/components/IconButton';

// import actions
import { AddToCartAction } from '../actions';

// import components
import Rating from '../components/rating';
import Size from '../components/size';
import Color from '../components/color';
import ProductModal from '../components/modal';

const { useState } = React;

const COLOR = [
    { code: '#f1c40f', name: 'orange' },
    { code: '#2ecc71', name: 'green' },
    { code: '#e74c3c', name: 'red' },
    { code: '#3498db', name: 'blue' },
    { code: '#2c3e50', name: 'black' },
];
const SIZE = [38, 39, 40, 41, 42];

const ProductDetails = ({ route, navigation }) => {
    const [visible, setVisible] = useState(false);
    const [color, setColor] = useState('');
    const [size, setSize] = useState(0);
    const [qty, setQty] = useState(0);

    const { product } = route.params;

    // get data from redux
    const { id } = useSelector((state) => {
        return {
            id: state.userReducer.id,
        };
    });
    const dispatch = useDispatch();

    const _plus = () => {
        setQty((prevstate) => prevstate + 1);
    };

    const _minus = () => {
        if (qty <= 0) return;
        setQty((prevstate) => prevstate - 1);
    };

    const _addToCart = async () => {
        const cart = {
            color,
            size,
            qty,
            total: product.harga * qty,
            user_id: id,
            product_id: product.id,
        };
        console.log('cart : ', cart);
        if (!color || !size || !qty) return;
        dispatch(AddToCartAction(cart));
        _resetState();
        navigation.navigate('order-nav');
    };

    const _resetState = () => {
        setVisible(false);
        setColor('');
        setSize(0);
        setQty(0);
    };

    const _onBackdropPress = () => _resetState();

    const _renderColor = () => {
        return COLOR.map((item, index) => {
            if (color === item.name) {
                return (
                    <Color
                        key={index}
                        color={item.code}
                        onTouch={() => setColor(item.name)}
                        opacity={0.6}
                        border={2}
                    />
                );
            } else {
                return (
                    <Color
                        key={index}
                        color={item.code}
                        onTouch={() => setColor(item.name)}
                    />
                );
            }
        });
    };

    const _renderSize = () => {
        return SIZE.map((item, index) => {
            if (size == item) {
                return (
                    <Size
                        key={index}
                        size={item}
                        onTouch={() => setSize(item)}
                        color={{ backgroundColor: color }}
                    />
                );
            } else {
                return (
                    <Size
                        key={index}
                        size={item}
                        onTouch={() => setSize(item)}
                    />
                );
            }
        });
    };

    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.images[0] }}
                    style={styles.image}
                />
            </View>
            <ScrollView style={styles.details}>
                <Rating number={product.rating} style={styles.star} size={24} />
                <Text style={styles.brand}>Brand : {product.brand}</Text>
                <Text style={styles.harga}>Harga : {product.harga}</Text>
                <Text style={styles.harga}>Deskripsi :</Text>
                <Text style={styles.deskripsi}>{product.deskripsi}</Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <IconButton
                    icon="bookmark-plus"
                    color="#e74c3c"
                    style={styles.iconbutton}
                />
                <Button
                    icon="cart"
                    mode="contained"
                    style={styles.button}
                    onPress={() => setVisible(true)}>
                    Add To Card
                </Button>
            </View>
            <ProductModal
                visible={visible}
                qty={qty}
                backdropPress={_onBackdropPress}
                minusPress={_minus}
                plusPress={_plus}
                cancelPress={_resetState}
                cartPress={_addToCart}
                renderColor={_renderColor()}
                renderSize={_renderSize()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
    },
    imageContainer: {
        height: '40%',
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    details: {
        flex: 1,
        paddingVertical: '3%',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%',
    },
    iconbutton: { flex: 1 },
    button: {
        flex: 4,
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0984e3',
    },
    addbutton: {
        marginTop: 15,
    },
    brand: {
        fontSize: 20,
        color: 'black',
        marginVertical: 8,
    },
    harga: {
        fontSize: 18,
        color: 'black',
        marginVertical: 8,
    },
    deskripsi: {
        fontSize: 16,
        textAlign: 'justify',
    },
    star: {
        margin: -2,
        padding: 0,
    },
});

export default ProductDetails;
