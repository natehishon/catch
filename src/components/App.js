import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component{

    state = {
        fishes: {

        },
        order: {

        }
    };

    addFish = fish => {

        const fishes = { ...this.state.fishes};

        fishes[`fish${Date.now()}`] = fish;
        this.setState({fishes});

        // this.state.fishes.push(fish);


    };

    loadSampleFishes = () => {
        this.setState( {fishes: sampleFishes} )
    };

    addToOrder = key => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;
    this.setState({ order });


    };

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market"></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}></Fish>)}
                    </ul>
                </div>
                <Order order={this.state.order} fishes={this.state.fishes} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }

}

export default App;