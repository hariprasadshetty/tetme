import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/style.css';
import VechicleList from '../Components/VechicleList';
import * as Vechicles from '../Actions/vechile.action';

class VechicleContainer extends Component {
    componentDidMount(){
        this.props.fetchVechicles();
    }
    render() {
        return  (
            <div>
                <VechicleList vechicles={this.props.vechicles}
                    scrollFetch={this.props.scrollFetchVechicles}
                    serachFetch={this.props.searchFetch}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
        vechicles: state.vechicles
	};
}

function mapDispatchToProps(dispatch) {
	return {
        fetchVechicles: () => dispatch(Vechicles.fetchVechicles()),
        scrollFetchVechicles: (url) => dispatch(Vechicles.scrollFetchVechicles(url)),
        searchFetch: (val) => dispatch(Vechicles.searchFetchVechicles(val))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(VechicleContainer);