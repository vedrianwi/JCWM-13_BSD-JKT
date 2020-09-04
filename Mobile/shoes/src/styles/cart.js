import { StyleSheet } from 'react-native';
import variable from './variable';

export default StyleSheet.create({
    root: {
        flex: 1,
    },
    cardContainer: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingVertical: '3%',
    },
    checkout: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
    },
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
