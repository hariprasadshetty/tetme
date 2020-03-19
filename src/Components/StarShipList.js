
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
class StarShipList extends Component {
    constructor(props){
        super(props);
        this.state = {
            serachInput:''
        };
    }

    onScrollMethod(e){
        const o = e.target;

        if (o.offsetHeight + o.scrollTop === o.scrollHeight) {
            if(this.props.starships.next){
                this.props.scrollFetch(this.props.starships.next);
            }
        }
    }

    onInputValueChange(term){
        if (term !== this.state.serachInput) {
            return;
        }
        this.props.serachFetch(term);
    }

    render() {
        const StartshipSearch = _.debounce((term) => {
            this.onInputValueChange(term);
        }, 800);

        return (
            <div className='containerStyle'>
            <div className='row'>
                <div className='col-1'>
                    <label><b>{'Search :'}</b></label>
                </div>
                <div className='col-11'>
                        <input className='serachInput'
                               type='text'
                               value={this.state.serachInput}
                                onChange= {(e) => {
                                    if (e.target.value === ' ' ||
                                            e.target.value.includes('  ')) {
                                        return;
                                    }
                                    this.setState({ serachInput: e.target.value });
                                        StartshipSearch(e.target.value);
                                }}
                               />
                </div>
               </div>
               <div className='containerBody'
                    onScroll={this.onScrollMethod.bind(this)} >
               {this.props.starships.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                        <div className='row'>
                            <div className='col-2'>
                                <label><b>{'Name : '}</b></label>
                            </div>
                            <div className='col-10'>{c.name}</div>
                            <div className='col-2'>
                                <label><b>{'Model : '}</b></label>
                            </div>
                            <div className='col-10'>{c.model}</div>
                            <div className='col-2'>
                                <label><b>{'Passengers : '}</b></label>
                            </div>
                            <div className='col-10'>{c.passengers}</div>
                            <div className='col-2'>
                                <label><b>{'Starship Class : '}</b></label>
                            </div>
                            <div className='col-10'>{c.starship_class}</div>
                            <div className='col-2'>
                                <label><b>{'Manufacturer : '}</b></label>
                            </div>
                            <div className='col-10'>{c.manufacturer}</div>
                            <div className='col-2'>
                                <label><b>{'Crew : '}</b></label>
                            </div>
                            <div className='col-10'>{c.crew}</div>
                            <div className='col-2'>
                                <label><b>{'Consumables : '}</b></label>
                            </div>
                            <div className='col-10'>{c.consumables}</div>
                            <button className='btn btn-primary'>{'Films'}</button>
                            <button className='btn btn-primary'>{'StarShips'}</button>
                            <button className='btn btn-primary'>{'Species'}</button>
                            <button className='btn btn-primary'>{'vehicles'}</button>
                        </div>
                    </div>
                    )}
               </div>
            </div>
        )
    }
}

StarShipList.propTypes = {
    starships:PropTypes.object
}

StarShipList.defaultProps = {
    starships:{}
}


export default StarShipList;