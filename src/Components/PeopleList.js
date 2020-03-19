import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FilmModal from './Modals/filmModal';
class PeopleList extends Component {
    constructor(props){
        super(props);
        this.state = {
            serachInput:'',
            showFilmModal:false
        };
    }

    onScrollMethod(e){
        const o = e.target;

        if (o.offsetHeight + o.scrollTop === o.scrollHeight) {
            if(this.props.peoples.next){
                this.props.scrollFetch(this.props.peoples.next);
            }
        }
    }

    onInputValueChange(term){
        if (term !== this.state.serachInput) {
            return;
        }
        this.props.serachFetch(term);
    }

    onFlimsClick(e) {
        const index = e.target.getAttribute('custom');
        const urls = this.props.peoples.data[index].films;
        if(urls){
            this.props.clickFetchFilms(urls);
        }
        this.setState({showFilmModal:true});
    }

    closeModal() {
        this.setState({showFilmModal:false});
    }

    render() {
        const PeoplesSearch = _.debounce((term) => {
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
                                    PeoplesSearch(e.target.value);
                            }}
                        />
                </div>
            </div>
            <div className='containerBody'
                    onScroll={this.onScrollMethod.bind(this)} >
            {this.props.peoples.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                        <div className='row'>
                            <div className='col-2'>
                                <label><b>{'Name : '}</b></label>
                            </div>
                            <div className='col-10'>{c.name}</div>

                            <div className='col-2'>
                                <label><b>{'Gender : '}</b></label>
                            </div>
                            <div className='col-10'>{c.gender}</div>

                            <div className='col-2'>
                                <label><b>{'Date of Birth : '}</b></label>
                            </div>
                            <div className='col-10'>{c.birth_year}</div>

                            <div className='col-2'>
                                <label><b>{'Height : '}</b></label>
                            </div>
                            <div className='col-10'>{c.height}</div>

                            <div className='col-2'>
                                <label><b>{'Hair Color : '}</b></label>
                            </div>
                            <div className='col-10'>{c.hair_color}</div>

                            <div className='col-2'>
                                <label><b>{'Skin Color : '}</b></label>
                            </div>
                            <div className='col-10'>{c.skin_color}</div>

                            <div className='col-2'>
                                <label><b>{'Eye Color : '}</b></label>
                            </div>
                            <div className='col-10'>{c.eye_color}</div>
                        </div>
                        <button custom={k} onClick={this.onFlimsClick.bind(this)} className='btn btn-primary'>{'Films'}</button>
                        <button className='btn btn-primary'>{'StarShips'}</button>
                        <button className='btn btn-primary'>{'Species'}</button>
                        <button className='btn btn-primary'>{'vehicles'}</button>
                    </div>
                    )}
            </div>
                <FilmModal show={this.state.showFilmModal}
                        films={this.props.contextFilms}
                        closeModal={this.closeModal.bind(this)}
                />
            </div>
        )
    }
}



PeopleList.propTypes = {
    peoples:PropTypes.object
}

PeopleList.defaultProps = {
    peoples:{}
}


export default PeopleList;