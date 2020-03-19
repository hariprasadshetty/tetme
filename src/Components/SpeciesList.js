
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
class SpeciesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            serachInput:''
        };
    }

    onScrollMethod(e){
        const o = e.target;

        if (o.offsetHeight + o.scrollTop === o.scrollHeight) {
            if(this.props.species.next){
                this.props.scrollFetch(this.props.species.next);
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
        const SpeciesSearch = _.debounce((term) => {
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
                                        SpeciesSearch(e.target.value);
                                }}
                               />
                </div>
               </div>
               <div className='containerBody'
                    onScroll={this.onScrollMethod.bind(this)}>
               {this.props.species.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                        <div className='row'>
                            <div className='col-2'>
                                <label><b>{'Name : '}</b></label>
                            </div>
                            <div className='col-10'>{c.name}</div>
                            <div className='col-2'>
                                <label><b>{'Language : '}</b></label>
                            </div>
                            <div className='col-10'>{c.language}</div>
                            <div className='col-2'>
                                <label><b>{'Average Lifespan : '}</b></label>
                            </div>
                            <div className='col-10'>{c.average_lifespan}</div>
                            <div className='col-2'>
                                <label><b>{'Classification : '}</b></label>
                            </div>
                            <div className='col-10'>{c.classification}</div>
                            <div className='col-2'>
                                <label><b>{'Designation : '}</b></label>
                            </div>
                            <div className='col-10'>{c.designation}</div>
                            <div className='col-2'>
                                <label><b>{'Eye Color : '}</b></label>
                            </div>
                            <div className='col-10'>{c.eye_colors}</div>
                            <div className='col-2'>
                                <label><b>{'Skin Colors : '}</b></label>
                            </div>
                            <div className='col-10'>{c.skin_colors}</div>
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

SpeciesList.propTypes = {
    species: PropTypes.object
}

SpeciesList.defaultProps = {
    species: {}
}


export default SpeciesList;