import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/style.css';
import FilmsList from '../Components/FilmsList';
import * as Films from '../Actions/films.action';

class FilmsContainer extends Component {
    componentDidMount(){
        this.props.fetchFilms();
    }
    render() {
        return  (
            <div>
                <FilmsList films={this.props.films}
                    scrollFetch={this.props.scrollFetchFilms}
                    serachFetch={this.props.searchFetch} />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
        films: state.films
	};
}

function mapDispatchToProps(dispatch) {
	return {
        fetchFilms: () => dispatch(Films.fetchFilms()),
        scrollFetchFilms: (url) => dispatch(Films.scrollFetchFilms(url)),
        searchFetch: (val) => dispatch(Films.searchFetchFilms(val))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);