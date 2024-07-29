import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../src/ui/';
import { AuthContext } from '../../src/auth/';


const mockedUseNavigate = jest.fn();
// mockeamos los custom hooks --> useNavigate es un custom hook de la libreria router --> vamos a mockear la libreria completa!
jest.mock('react-router-dom', () => 
    ({      // un callback que retorna un objeto
        ...jest.requireActual('react-router-dom'), // tenemos que retornar todo lo de la librera. aunque solo vamos a pisar el hook useNavigate
        useNavigate: () => mockedUseNavigate, // en lugar de retornar el useNavigate real retornamos el mockeado
}));

describe('Pruebas en <Navbar />', () => {
    const contextValue = {
        logged: true,
        user: {
            name: 'Juan Carlos'
        },
        logout: jest.fn()
    }
    beforeEach(() => jest.clearAllMocks() );

    test('Debe mostrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );
        expect( screen.getByText('Juan Carlos') ).toBeTruthy();
    });

    test('Debe llamar el logout y navigate cuando se hace click en el botón', () => {
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );
        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
        expect( contextValue.logout ).toHaveBeenCalled()
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true})
    });
});