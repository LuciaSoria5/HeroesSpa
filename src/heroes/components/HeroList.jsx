import { HeroCard } from './HeroCard';
import { getHeoresByPubliser } from '../helpers'
import { useMemo } from 'react';

export const HeroList = ( { publisher } ) => {

    // solo cuando el publisher cambie volvemos a disparar la funcion
    const heroes = useMemo( () => getHeoresByPubliser( publisher ), [ publisher ]);

  return (
    <>
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            { heroes.map( heroe => (
                    <HeroCard key={ heroe.id} {...heroe} />
                )) }
        </div>
    </>
  )
};
