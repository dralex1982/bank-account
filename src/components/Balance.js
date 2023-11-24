import React, {Component} from 'react';
import store from "../redux/storeConfiguration";

class Balance extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <h1>Bank Hapoalim</h1>
                <h3>Balance = {store.getState().balance}</h3>
            </div>
        );
    }

};

export default Balance;