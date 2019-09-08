import React, {Component} from 'react';
import {FlatList, ScrollView, Text, View, SafeAreaView} from 'react-native';
import {connect} from "react-redux";
import {styles} from "./styles";
import {listingsActionCreator} from "../../_store/_actionCreators";

class ListingsScreen extends Component{

    componentDidMount(): void {
        this.props.dispatch(listingsActionCreator.getListings());
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const { listings, loadingReduxState } = this.props;
        const {wrapper, container, rowFirstChild, row, text} = styles;

        if(loadingReduxState){
            return (
                <View style={wrapper}>
                    <Text style={text}>Loading...</Text>
                </View>
            )
        }

        console.log("listings: ", listings.data);


        return (
            <SafeAreaView style={wrapper}>

                <ScrollView>

                    <View style={container}>
                        <FlatList
                            style={{paddingVertical: 25}}
                            data={listings.data}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) =>

                                <View style={index === 0 ? rowFirstChild : row}>
                                    <Text style={text}>{item.name}</Text>
                                </View>
                            }
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }

}


const mapStateToProps = (state) => {
    const { listingsData : {listings, loading} } = state;
    return {
        listings: listings.data,
        loadingReduxState: loading
    };
};

const connectedListingsScreen = connect(mapStateToProps)(ListingsScreen);

export {connectedListingsScreen as ListingsScreen}