import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/style.css';
import SpeciesList from '../Components/SpeciesList';
import * as Species from '../Actions/species.action';

class SpeciesContainer extends Component {
    componentDidMount(){
        this.props.fetchSpecies();
    }
    render() {
        return  (
            <div>
                <SpeciesList species={this.props.species}
                    scrollFetch={this.props.scrollFetchSpecies}
                    serachFetch={this.props.searchFetch}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
        species: state.species
	};
}

function mapDispatchToProps(dispatch) {
	return {
        fetchSpecies: () => dispatch(Species.fetchSpecies()),
        scrollFetchSpecies: (url) => dispatch(Species.scrollFetchSpecies(url)),
        searchFetch: (val) => dispatch(Species.searchFetchSpecies(val))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesContainer);