import "bootstrap/dist/css/bootstrap.min.css";
function NavBar() {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: 'white' }}>Social</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: 'white' }}>Post</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" style={{ color: 'white' }}>Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    );

} export default NavBar;