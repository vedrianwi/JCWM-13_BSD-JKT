import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Chip from 'react-native-paper/lib/commonjs/components/Chip';

const dataChips = [
    { icon: 'face', name: 'Men' },
    { icon: 'shoe-formal', name: 'Formal' },
    { icon: 'shoe-heel', name: 'Heel' },
    { icon: 'run', name: 'Running' },
    { icon: 'soccer', name: 'Sports' },
    { icon: 'basketball', name: 'Basketball' },
];

const Chips = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.root}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {dataChips.map((item, index) => (
                <Chip key={index} icon={item.icon} style={styles.chip}>
                    {item.name}
                </Chip>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    chip: {
        marginRight: 5,
    },
});

export default Chips;
