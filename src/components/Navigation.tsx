import React from 'react';
import { Link } from 'react-router-dom';

interface INavigation {
    activeMenu?: string
}

const Navigation = (props: INavigation) => {
    const { activeMenu } = props;
    return (
        <div className="bottom-nav">
            <div className={`nav-item ${activeMenu === 'menu' ? 'active' : ''}`}>
                <div className="nav-icon">
                    <i data-feather="menu" />
                </div>
                <span>Menu</span>
            </div>
            {/* <div className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`}>
                <div className="nav-icon">
                    <i data-feather="home" />
                </div>
                <span>Home</span>
            </div> */}
            <Link to="/" className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`}>
                <div className="nav-icon">
                    <i data-feather="home" />
                </div>
                <span>Home</span>
            </Link>
            <Link to="/report" className={`nav-item ${activeMenu === 'report' ? 'active' : ''}`}>
                <div className="nav-icon">
                    <i data-feather="bar-chart-2" />
                </div>
                <span>Report</span>
            </Link>
        </div>
    )
}

export default Navigation;
