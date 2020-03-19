
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
class VechicleList extends Component {
    constructor(props){
        super(props);
        this.state = {
            serachInput:''
        };
    }

    onScrollMethod(e){
        const o = e.target;

        if (o.offsetHeight + o.scrollTop === o.scrollHeight) {
            if(this.props.vechicles.next){
                this.props.scrollFetch(this.props.vechicles.next);
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
        const VechiclesSearch = _.debounce((term) => {
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
                                        VechiclesSearch(e.target.value);
                                }}
                               />
                </div>
               </div>
               <div className='containerBody'
                    onScroll={this.onScrollMethod.bind(this)} >
               {this.props.vechicles.data.map((c, k) =>
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
                                <label><b>{'Cargo Capacity : '}</b></label>
                            </div>
                            <div className='col-10'>{c.cargo_capacity}</div>
                            <div className='col-2'>
                                <label><b>{'Consumables : '}</b></label>
                            </div>
                            <div className='col-10'>{c.consumables}</div>
                            <div className='col-2'>
                                <label><b>{'Passangers : '}</b></label>
                            </div>
                            <div className='col-10'>{c.passengers}</div>
                            <div className='col-2'>
                                <label><b>{'Crew : '}</b></label>
                            </div>
                            <div className='col-10'>{c.crew}</div>
                            <div className='col-2'>
                                <label><b>{'Max Atmosphiring Speed : '}</b></label>
                            </div>
                            <div className='col-10'>{c.max_atmosphering_speed}</div>
                            <div className='col-2'>
                                <label><b>{'Manufacturer : '}</b></label>
                            </div>
                            <div className='col-10'>{c.manufacturer}</div>
                            <div className='col-2'>
                                <label><b>{'Vechicle Class : '}</b></label>
                            </div>
                            <div className='col-10'>{c.vehicle_class}</div>
                            <button className='btn btn-primary'>{'Films'}</button>
                            <button className='btn btn-primary'>{'Pilots'}</button>
                        </div>
                    </div>
                    )}
               </div>
            </div>
        )
    }
}

VechicleList.propTypes = {
    vechicles:PropTypes.object
}

VechicleList.defaultProps = {
    vechicles:{}
}

export default VechicleList;