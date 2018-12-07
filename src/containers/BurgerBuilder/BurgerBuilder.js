import React, { Component } from 'react';
import Aux from './../../hoc/Auxiliary'
import Burger from './../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salada: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;