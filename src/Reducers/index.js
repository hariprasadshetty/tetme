import { combineReducers } from 'redux';
import Films from './films.reducer';
import Peoples from './people.reducer';
import Planets from './planets.reducer';
import Species from './species.reducer';
import Starships from './startship.reducer';
import Vechicles from './vechicle.reducer';
import ContextFilms from './contextFilms.reducer';

const rootReducers = combineReducers({
    films: Films,
    peoples: Peoples,
    planets: Planets,
    species: Species,
    starships: Starships,
    vechicles: Vechicles,
    contextFilms: ContextFilms
});

export default rootReducers;