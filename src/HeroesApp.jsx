import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    // la autenticación es sobre toda la aplicación.
    <AuthProvider> 
        <AppRouter />
    </ AuthProvider>
  )
};
