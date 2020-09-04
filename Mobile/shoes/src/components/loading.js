import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-paper/lib/commonjs/components/Modal';
import ActivityIndicator from 'react-native-paper/lib/commonjs/components/ActivityIndicator';

import { variable } from '../styles';

const Loading = ({ visible }) => {
    return (
        <Modal visible={visible}>
            <View style={styles.loading}>
                <ActivityIndicator size={28} />
                <Text style={styles.loadingtext}>Loading . . .</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    loading: {
        backgroundColor: 'white',
        width: '50%',
        height: '30%',
        alignSelf: 'center',
        ...variable.center,
    },
    loadingtext: {
        fontSize: 18,
        marginLeft: 15,
    },
});

export default Loading;
