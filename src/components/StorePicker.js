import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    //     console.log("init");
    // }

    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault();

        console.log(this.myInput.value.value);
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" required ref={this.myInput} placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
                )
    }
}

export default StorePicker;