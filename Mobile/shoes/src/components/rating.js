import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from 'react-native-paper/lib/commonjs/components/IconButton';

const RatingStar = ({ number, size = 18, style = styles.list }) => {
    const _renderStar = () => {
        let stars = [];
        for (let i = 0; i < number; i++) {
            stars.push(
                <IconButton
                    icon="star"
                    color="#f1c40f"
                    size={size}
                    style={style}
                    key={i}
                />,
            );
        }
        return stars;
    };
    return <View style={styles.root}>{_renderStar()}</View>;
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    list: {
        padding: 5,
        margin: -5,
    },
});

export default RatingStar;
