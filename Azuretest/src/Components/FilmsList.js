import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
class FilmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            serachInput:''
        };
    }

    onScrollMethod(e){
        const o = e.target;

        if (o.offsetHeight + o.scrollTop === o.scrollHeight) {
            if(this.props.films.next){
                this.props.scrollFetch(this.props.films.next);
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
        const FilmSearch = _.debounce((term) => {
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
                                    if (e.target.value === ' ' || e.target.value.includes('  ')) {
                                        return;
                                    }
                                    this.setState({ serachInput: e.target.value });
                                        FilmSearch(e.target.value);
                                }}
                        />
                </div>
            </div>
            <div className='containerBody'
                 onScroll={this.onScrollMethod.bind(this)} >
                {this.props.films.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                        <div className='row'>
                            <div className='col-2'>
                                <label><b>{'Title :'}</b></label>
                            </div>
                            <div className='col-10'>{c.title}</div>
                            <div className='col-2'>
                                <label><b>{'Description :'}</b></label>
                            </div>
                            <div className='col-10'>{c.opening_crawl}</div>
                            <div className='col-2'>
                                <label><b>{'Diretor : '}</b></label>
                            </div>
                            <div className='col-10'>{c.director}</div>
                            <div className='col-2'>
                                <label><b>{'Producer : '}</b></label>
                            </div>
                            <div className='col-10'>{c.producer}</div>
                            <div className='col-2'>
                                <label><b>{'Release Date : '}</b></label>
                            </div>
                            <div className='col-10'>{c.release_date}</div>
                            <button className='btn btn-primary'>{'Characters'}</button>
                            <button className='btn btn-primary'>{'Planets'}</button>
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


FilmList.propTypes = {
    films:PropTypes.object
}

FilmList.defaultProps = {
    films:{}
}

export default FilmList;