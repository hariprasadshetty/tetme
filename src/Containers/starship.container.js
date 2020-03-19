import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/style.css';
import StarShipList from '../Components/StarShipList';
import * as StarShips from '../Actions/starship.action';

class StarshipContainer extends Component {
    componentDidMount(){
        this.props.fetchStarships();
    }
    render() {
        return  (
            <div>
                <StarShipList starships={this.props.starships}
                    scrollFetch={this.props.scrollFetchStarships}
                    serachFetch={this.props.searchFetch}
                    />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
        starships: state.starships
	};
}

function mapDispatchToProps(dispatch) {
	return {
        fetchStarships: () => dispatch(StarShips.fetchStarships()),
        scrollFetchStarships: (url) => dispatch(StarShips.scrollFetchStarships(url)),
        searchFetch: (val) => dispatch(StarShips.searchFetchStarships(val))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipContainer);