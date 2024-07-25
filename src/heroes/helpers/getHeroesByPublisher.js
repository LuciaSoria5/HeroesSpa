
import { heroes } from '../data/heroes';

export const getHeoresByPubliser = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    
    if (!validPublishers.includes( publisher )) {
        return new Error(`${ publisher} is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
};