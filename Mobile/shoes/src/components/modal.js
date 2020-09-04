import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from 'react-native-paper/lib/commonjs/components/Button';
import Modal from 'react-native-modal';

const COLOR = [
    { code: '#f1c40f', name: 'orange' },
    { code: '#2ecc71', name: 'green' },
    { code: '#e74c3c', name: 'red' },
    { code: '#3498db', name: 'blue' },
    { code: '#2c3e50', name: 'black' },
];
const SIZE = [38, 39, 40, 41, 42];

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ProductModal = ({
    minusPress,
    plusPress,
    cancelPress,
    cartPress,
    renderColor,
    renderSize,
    qty,
    visible,
    backdropPress,
}) => {
    return (
        <Modal
            isVisible={visible}
            style={styles.view}
            hasBackdrop={true}
            deviceHeight={HEIGHT}
            deviceWidth={WIDTH}
            onBackdropPress={backdropPress}>
            <View style={styles.modal}>
                <Text>Color : </Text>
                <View style={styles.colorContainer}>{renderColor}</View>
                <Text>Size :</Text>
                <View style={styles.sizeContainer}>{renderSize}</View>
                <Text>Quantiy :</Text>
                <View style={styles.quantity}>
                    <Button
                        mode="contained"
                        onPress={minusPress}
                        style={styles.qty}>
                        -
                    </Button>
                    <Text style={styles.qtytext}>{qty}</Text>
                    <Button
                        mode="contained"
                        onPress={plusPress}
                        style={styles.qty}>
                        +
                    </Button>
                </View>
                <View style={styles.buttonContainer2}>
                    <Button
                        icon="trash-can"
                        mode="contained"
                        style={[styles.button2, styles.cancel]}
                        onPress={cancelPress}>
                        Cancel
                    </Button>
                    <Button
                        icon="cart"
                        mode="contained"
                        style={[styles.button2, styles.add]}
                        onPress={cartPress}>
                        Add To Cart
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modal: {
        flex: 0.45,
        backgroundColor: '#ffffff',
        paddingVertical: '5%',
        paddingHorizontal: '8%',
    },
    colorContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: '2%',
    },
    sizeContainer: {
        flex: 1,
        padding: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        overflow: 'hidden',
    },
    quantity: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: '15%',
    },
    qty: {
        minWidth: 45,
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qtytext: {
        fontSize: 28,
    },
    buttonContainer2: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button2: {
        flex: 1,
        marginHorizontal: 5,
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancel: {
        backgroundColor: '#ef5777',
    },
    add: {
        backgroundColor: '#0984e3',
    },
});

export default ProductModal;
