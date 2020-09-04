import React from 'react';
import { StyleSheet } from 'react-native';
import Card from 'react-native-paper/lib/commonjs/components/Card/Card';
import Title from 'react-native-paper/lib/commonjs/components/Typography/Title';

import RatingStar from './rating';

const ProductCard = ({ title, image, rating, onTouch }) => {
    return (
        <Card style={styles.root} onPress={onTouch}>
            <Card.Cover source={{ uri: image }} style={styles.cover} />
            <Card.Content style={styles.content}>
                <RatingStar number={rating} />
                <Title style={styles.title}>{title}</Title>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 5,
        padding: 0,
        borderRadius: 10,
        overflow: 'hidden',
        height: 200,
    },
    cover: {
        padding: 15,
        backgroundColor: '#ffffff',
        height: '65%',
    },
    content: {
        flex: 1,
        margin: 0,
        overflow: 'hidden',
        display: 'flex',
        padding: 16,
    },
    title: {
        fontSize: 12,
        fontFamily: 'JosefinSans-Regular',
        lineHeight: 18,
        paddingVertical: 8,
    },
});

export default ProductCard;
