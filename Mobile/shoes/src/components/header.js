import React from 'react';
import { StyleSheet } from 'react-native';
import AvatareText from 'react-native-paper/lib/commonjs/components/Avatar/AvatarText';
import AppbarHeader from 'react-native-paper/lib/commonjs/components/Appbar/AppbarHeader';
import AppbarContent from 'react-native-paper/lib/commonjs/components/Appbar/AppbarContent';
import AppbarAction from 'react-native-paper/lib/commonjs/components/Appbar/AppbarAction';

const HeaderBar = ({ title }) => {
    return (
        <AppbarHeader style={styles.header}>
            <AppbarContent title={title} titleStyle={styles.title} />
            <AppbarAction icon="magnify" />
            <AvatareText size={28} label="A" style={styles.avatar} />
        </AppbarHeader>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffff',
        padding: 0,
        height: 70,
    },
    title: {
        fontSize: 32,
        fontFamily: 'JosefinSans-Bold',
    },
    avatar: {
        backgroundColor: '#0984e3',
        marginRight: 10,
    },
});
export default HeaderBar;
