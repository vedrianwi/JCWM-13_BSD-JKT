import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const dataList = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
];

const col = 2;
const WIDTH = Dimensions.get('screen').width;

const FlatListGrid = () => {
    const _formatData = (data, col) => {
        const filldata = col - (data.length % col);
        console.log('need data : ', filldata);

        for (let i = 0; i < filldata; i++) {
            dataList.push({ key: dataList.length + 1, empty: true });
        }

        return data;
    };

    const _renderBox = ({ item }) => {
        if (item.empty) {
            return <View style={[styles.box, styles.invisible]} />;
        } else {
            return (
                <View style={styles.box}>
                    <Text style={styles.text}>{item.key}</Text>
                </View>
            );
        }
    };

    return (
        <View style={styles.root}>
            <FlatList
                data={_formatData(dataList, col)}
                renderItem={_renderBox}
                numColumns={col}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
    },
    box: {
        flex: 1,
        backgroundColor: '#2ecc71',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: WIDTH / col,
        margin: 5,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    invisible: {
        backgroundColor: 'transparent',
    },
});

export default FlatListGrid;
