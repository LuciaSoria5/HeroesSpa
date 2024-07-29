import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Pruebas en <PublicRoute />', () => {
    
    test('Debe mostrar el children si no está autenticado', () => {
        const contextValue = {
            logged: false
        };
        render( // como <PublicRoute> usa el contexto, hay que ponerlo como children de AuthContext
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        expect( screen.getByText('Ruta pública') ).toBeTruthy();
    });

    test('Debe navegar si está autenticado', () => { 
        const contextValue = {
            logged: true, // como estamos logueados, se tiene que renderizar la págna de marvel
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        };
        render(
            <AuthContext.Provider value={ contextValue }>
                {/* Para simular el testing --> El <memoryRouter> es para simular el <Router>*/}
                <MemoryRouter initialEntries={['/login']}> 
                {/* Para simular que te encontras en la ruta /login */}
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute> {/* Para que autentique al usuario */}
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={ <h1>Página Marvel</h1> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect( screen.getByText('Página Marvel') ).toBeTruthy(); // se renderiza la pagina correcta
    });
});