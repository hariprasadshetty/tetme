
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
class PlanetsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            serachInput:''
        };
    }

    onScrollMethod(e){
        const o = e.target;

        if (o.offsetHeight + o.scrollTop === o.scrollHeight) {
            if(this.props.planets.next){
                this.props.scrollFetch(this.props.planets.next);
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
        const PlanetsSearch = _.debounce((term) => {
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
                                    PlanetsSearch(e.target.value);
                            }}
                        />
                </div>
               </div>
               <div className='containerBody'
                    onScroll={this.onScrollMethod.bind(this)} >
               {this.props.planets.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                        <div className='row'>
                            <div className='col-2'>
                                <label><b>{'Name : '}</b></label>
                            </div>
                            <div className='col-10'>{c.name}</div>
                            <div className='col-2'>
                                <label><b>{'Gravity : '}</b></label>
                            </div>
                            <div className='col-10'>{c.gravity}</div>
                            <div className='col-2'>
                                <label><b>{'Population : '}</b></label>
                            </div>
                            <div className='col-10'>{c.population}></div>
                            <div className='col-2'>
                                <label><b>{'Rotation Period : '}</b></label>
                            </div>
                            <div className='col-10'>{c.rotation_period}</div>
                            <div className='col-2'>
                                <label><b>{'Surface Water : '}</b></label>
                            </div>
                            <div className='col-10'>{c.surface_water}</div>
                            <div className='col-2'>
                                <label><b>{'Terrain : '}</b></label>
                            </div>
                            <div className='col-10'>{c.terrain}</div>
                            <div className='col-2'>
                                <label><b>{'Orbital Period : '}</b></label>
                            </div>
                            <div className='col-10'>{c.orbital_period}</div>
                            <button className='btn btn-primary'>{'Films'}</button>
                            <button className='btn btn-primary'>{'Peoples'}</button>
                        </div>
                    </div>
                    )}
               </div>
            </div>
        )
    }
}


PlanetsList.propTypes = {
    planets:PropTypes.object
}

PlanetsList.defaultProps = {
    planets:{}
}

export default PlanetsList;