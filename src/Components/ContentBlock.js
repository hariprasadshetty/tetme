import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PeopleList from '../Containers/people.container';
import PlanetsContainer from '../Containers/planet.container';
import FilmsContainer from '../Containers/films.container';
import VechicleContainer from '../Containers/vechile.container';
import SpeciesContainer from '../Containers/species.container';
import StarshipContainer from '../Containers/starship.container';

class ContentBlock extends Component {
    render() {
        return (
            <Switch>
                        <Route path='/people' component={PeopleList} />
                        <Route path='/films' component={FilmsContainer} />
                        <Route path='/planets' component={PlanetsContainer} />
                        <Route path='/species' component={SpeciesContainer} />
                        <Route path='/starships' component={StarshipContainer} />
                        <Route path='/vechicles' component={VechicleContainer} />
                        <Redirect exact={true} from='/' to='/people' />
                    </Switch>
        )
    }
}


export default ContentBlock;