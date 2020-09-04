import React from 'react';
import { StyleSheet } from 'react-native';
import Card from 'react-native-paper/lib/commonjs/components/Card/Card';

const ProductCarousel = ({ image }) => {
    return (
        <Card style={styles.root}>
            <Card.Cover source={{ uri: image }} />
        </Card>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: '#f2f2f2',
    },
});
export default ProductCarousel;
