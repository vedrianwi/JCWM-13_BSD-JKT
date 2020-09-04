import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import Button from 'react-native-paper/lib/commonjs/components/Button';
import Modal from 'react-native-paper/lib/commonjs/components/Modal';
import Loading from '../components/loading';

// import actions
import { UploadReceipt } from '../actions';

const { useState } = React;

const PaymentReceipt = () => {
    const [visible, setVisible] = useState(false);

    // connect redux
    const { id, loading } = useSelector((state) => {
        return {
            id: state.paymentReducer.payment_id,
            loading: state.paymentReducer.loading,
        };
    });
    const dispatch = useDispatch();

    const _onBtnCamera = () => {
        ImagePicker.openCamera({
            width: 700,
            height: 700,
            cropping: true,
            mediaType: 'photo',
        })
            .then((image) => {
                console.log('image', image);
                dispatch(UploadReceipt(image, id));
                setVisible(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const _onbtnFolder = () => {
        ImagePicker.openPicker({
            width: 700,
            height: 700,
            cropping: true,
            mediaType: 'photo',
        })
            .then((image) => {
                console.log('image', image);
                dispatch(UploadReceipt(image, id));
                setVisible(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Do Payment before</Text>
            <View style={styles.time}>
                <Text style={styles.timeText}>{1} h : </Text>
                <Text style={styles.timeText}>{29} m : </Text>
                <Text style={styles.timeText}>{60} s</Text>
            </View>
            <Button
                mode="contained"
                icon="upload"
                onPress={() => setVisible(true)}>
                Upload Bukti Transaksi
            </Button>
            <Modal visible={visible} onDismiss={() => setVisible(false)}>
                <View style={styles.modalview}>
                    <Button
                        icon="camera"
                        style={styles.button}
                        onPress={_onBtnCamera}>
                        Open Camera
                    </Button>
                    <Button
                        icon="folder"
                        style={styles.button}
                        onPress={_onbtnFolder}>
                        Browse File
                    </Button>
                </View>
            </Modal>
            <Loading visible={loading} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: '8%',
        paddingVertical: '10%',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
    time: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeText: {
        fontSize: 28,
        fontWeight: '700',
    },
    Modal: {},
    modalview: {
        backgroundColor: '#ffffff',
        height: '40%',
        width: '60%',
        borderRadius: 10,
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginVertical: 4,
    },
});

export default PaymentReceipt;
