import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale, { verticalScale } from '../../utils/Scale';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

    inputFormHeader: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(200),
    },

    bgImg: {
        width: scale(375),
        height: scale(812),
    },

    asteroidDetailContainer: {
        justifyContent: 'center',
        height: scale(200),
        width: scale(350),
        borderWidth: scale(2),
        borderColor: '#000000',
        backgroundColor: '#6a8ead',
        paddingVertical: scale(10),
        borderRadius: scale(10),
        paddingRight: scale(10),
        marginHorizontal: scale(20)
    },

    fieldValue: {
        fontSize: scale(16),
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: scale(20),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10),
    },


});
