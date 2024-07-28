import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
          <Routes>

                                            {/* Opcion 1: por modulos */}
              {/* <Route path="login" element={ 
                <PublicRoute>
                   <LoginPage />
                </PublicRoute>
               } /> */}

                                            {/* Opcion 2: por rutas --> te permite agregar mas rutas publicas facilemte*/}
          <Route path="login/*" element={ 
                <PublicRoute>
                   <Routes>
                      <Route path="/*" element={ <LoginPage /> } />
                   </Routes>
                </PublicRoute>
               } />
              
              {/* Con <PrivateRoute> protegemos las rutas privadas */}
              <Route path="/*" element={
                 <PrivateRoute>
                    <HeroesRoutes />
                 </PrivateRoute> 
                } />

          </Routes>
    </>
  )
};
