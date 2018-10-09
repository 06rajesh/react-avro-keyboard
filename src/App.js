import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AvroInput from './avro/AvroInput';

class App extends Component {

    onInputChange(changedVal){
        //console.log(changedVal);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <form className="App-intro" style={styles.formStyle}>
                    <AvroInput type="text" className='form-control' placeholder="Search here" onChange={this.onInputChange}/>
                    <AvroInput type = "textarea" className='form-control' rows = '13'/>
                </form>
          </div>
        );
    }
}

const styles = {
    formStyle: {
        maxWidth: '450px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
};

export default App;
