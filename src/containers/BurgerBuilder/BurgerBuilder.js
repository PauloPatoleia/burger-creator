import React, { Component } from 'react';
import Aux from './../../hoc/Auxiliary'
import Burger from './../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Burger controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;