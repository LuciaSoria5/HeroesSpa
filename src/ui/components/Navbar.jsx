import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate(); // custom hook del router

    const onLogout = () => {
                    // a donde queres ir
        navigate( '/login', {
            replace: true, // evita que puedas volver al sitio anterior con la flecha
        } );
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        // className="nav-item nav-link" 
                        className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : ''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        // className="nav-item nav-link" 
                        className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : ''}` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    {/* <NavLink 
                        // className="nav-item nav-link" 
                        className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : ''}` }
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink 
                        // className="nav-item nav-link" 
                        className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : ''}` }
                        to="/hero"
                    >
                        Hero
                    </NavLink> */}

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-primary'>
                        Luci
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                
                </ul>
            </div>
        </nav>
    )
};