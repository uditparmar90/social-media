import { TiSocialInstagram } from "react-icons/ti";
import { GoHomeFill } from "react-icons/go";
import { RiDashboardHorizontalFill } from "react-icons/ri";


function Sidebar({ selectedTab, setSelectedTab }) {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <TiSocialInstagram className="bi me-2" size={32} />
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={() => { console.log('home'); setSelectedTab('Home') }}>
                    <a href="#" className={`nav-link link-dark ${selectedTab === 'Home' && 'active'}`} aria-current="page">
                        <GoHomeFill className="bi me-2" size={16} />
                        Home
                    </a>
                </li>
                <li onClick={() => { console.log('home'); setSelectedTab('Create Post') }}>
                    <a href="#" className={`nav-link link-dark ${selectedTab === 'Create Post' && 'active'}`}>
                        <RiDashboardHorizontalFill className="bi me-2" size={16} />
                        Create Post
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
