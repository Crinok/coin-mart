import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#24252f'
    },
    container: {
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    text:{
        textAlign: 'left',
        paddingVertical: 15,
        color: '#fff',
    },
    row:{
        borderBottomWidth: 1,
        borderColor: '#576075',
        paddingHorizontal: 20,
    },
    rowFirstChild:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#576075',
        paddingHorizontal: 20,
    },
});

export {styles}