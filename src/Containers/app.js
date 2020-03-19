import React, { Component } from 'react';
import '../Style/style.css';
import HeaderBar from '../Components/Header';
import ContentBlock from '../Components/ContentBlock';
import MenuBar from '../Components/MenuBar';

class App extends Component {
    render() {
        return  (
            <div>
                <div className='row'>
                    <div className='col'>
                        <HeaderBar />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <MenuBar />
                    </div>
                    <div className='col-10'>
                        <ContentBlock />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;