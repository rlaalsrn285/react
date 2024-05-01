import{NavLink} from "react-router-dom";

function Menu() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" />
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu">
                                    <NavLink className='dropdown-item' to='/ex01'>바보멍청</NavLink>
                                    <NavLink className='dropdown-item' to='/ex02'>구리구리</NavLink>
                                    <NavLink className='dropdown-item' to='/ex03'>술술술술</NavLink>
                                    <NavLink className='dropdown-item' to='/ex04'>국가수도</NavLink>
                                    <NavLink className='dropdown-item' to='/ex051234'>숭구리당당</NavLink>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">포킷몬</a>
                                <div className="dropdown-menu">
                                    <NavLink className='dropdown-item' to='/ppp'>포켓몬</NavLink>
                                    <NavLink className='dropdown-item' to='/eee'>EMP원본</NavLink>
                                    <NavLink className='dropdown-item' to='/digimon'>디지몬</NavLink>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2" type="search" placeholder="Search" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;