import React, { Component } from "react";
import logo from "./assets/img/logo.svg";
import loading from "./assets/img/loading.gif";
import "./App.css";

import { connect } from "react-redux";
import getDogAction from "./redux/actions/getDogAction"

class App extends Component {
    render() {
        const { fetching, dog, getDogAction, error } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={dog || logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Dog Saga</h1>
                </header>

                {dog ? (
                    <p className="App-intro">Keep clicking for new dogs</p>
                ) : (
                    <p className="App-intro">Replace the React icon with a dog!</p>
                )}

                <button onClick={getDogAction}>Request a Dog</button>

                {fetching ? (
                    <div className="Loading">
                        <img src={loading} alt="loading" />
                        <span>Processing ...</span>
                    </div>
                ) : null}
                {error && <p style={{color: "red"}}>Oops! Something went wrong!</p>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const stateDog = state.getDogReducer
    return {
        fetching: stateDog.fetching,
        dog: stateDog.dog,
        error: stateDog.error
    };
};

export default connect(mapStateToProps, {getDogAction})(App);