import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-paper/lib/commonjs/components/Button';
import IconButton from 'react-native-paper/lib/commonjs/components/IconButton';

export const CardList = ({ title, harga, qty, editPress, deletePress }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cartTitle}>
                <Text style={styles.title}>{title}</Text>
                <Button
                    color="#ef5777"
                    style={styles.delete}
                    labelStyle={styles.deletelabel}
                    onPress={deletePress}>
                    Delete
                </Button>
            </View>
            <View style={styles.content}>
                <View style={styles.details}>
                    <Text>Harga : {harga}</Text>
                    <Text>Quantity : {qty}</Text>
                </View>
                <View>
                    <IconButton
                        icon="pencil"
                        size={20}
                        color="#ffc048"
                        style={styles.edit}
                        onPress={editPress}
                    />
                </View>
            </View>
        </View>
    );
};

export const CardListEdit = ({
    title,
    harga,
    qty,
    plusPress,
    minPress,
    savePress,
    cancelPress,
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cartTitle}>
                <Text style={styles.title}>{title}</Text>
                <Button
                    color="#ef5777"
                    style={styles.delete}
                    labelStyle={styles.deletelabel}>
                    Delete
                </Button>
            </View>
            <View style={styles.content}>
                <View style={styles.details}>
                    <Text>Harga : {harga}</Text>
                    <View style={styles.qtycontainer}>
                        <Text>Quantity : </Text>
                        <IconButton
                            icon="minus"
                            size={20}
                            color="#ffc048"
                            style={styles.edit}
                            onPress={minPress}
                        />
                        <Text>{qty}</Text>
                        <IconButton
                            icon="plus"
                            size={20}
                            color="#ffc048"
                            style={styles.edit}
                            onPress={plusPress}
                        />
                    </View>
                </View>
                <View style={styles.editButtonConatiner}>
                    <IconButton
                        icon="cancel"
                        size={20}
                        color="#ffc048"
                        style={styles.edit}
                        onPress={cancelPress}
                    />
                    <IconButton
                        icon="check"
                        size={20}
                        color="#ffc048"
                        style={styles.edit}
                        onPress={savePress}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    cartTitle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    title: {
        flex: 9,
        fontSize: 14,
        fontWeight: 'bold',
    },
    delete: {
        flex: 1,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deletelabel: {
        fontWeight: '700',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    edit: {
        marginHorizontal: '7%',
    },
    details: {
        flex: 3,
    },
    editButtonConatiner: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qtycontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
