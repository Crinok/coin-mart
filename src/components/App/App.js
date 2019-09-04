import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from "../../_utils";
import {ListingsScreen} from "../../screens";


/**
 * @author Chris Okebata
 */

export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <ListingsScreen/>
        </Provider>
    );
  }
}
