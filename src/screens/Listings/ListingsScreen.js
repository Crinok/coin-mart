import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {connect} from "react-redux";
import {styles} from "./styles";
import {listingsActionCreator} from "../../_store/_actionCreators";

class ListingsScreen extends Component{

    componentDidMount(): void {
        this.props.dispatch(listingsActionCreator.getListings());
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const { listings } = this.props;

        console.log("listings: ",listings);

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Coin mart!</Text>
            </View>
        );
    }

}


const mapStateToProps = (state) => {
    const { listings } = state;
    return {
        listings: listings,
    };
};

const connectedListingsScreen = connect(mapStateToProps)(ListingsScreen);

export {connectedListingsScreen as ListingsScreen}