import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

interface INavigation {
    activeMenu?: string
}

const Navigation = (props: INavigation) => {
    const { activeMenu } = props;
    return (
        <div className="bottom-nav">
            <div className={`nav-item ${activeMenu === 'menu' ? 'active' : ''}`}>
                <div className="nav-icon">
                    <Icon icon="menu" />
                </div>
                <span>Menu</span>
            </div>
            {/* <div className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`}>
                <div className="nav-icon">
                    <Icon icon="home" />
                </div>
                <span>Home</span>
            </div> */}
            <Link to="/" className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`}>
                <div className="nav-icon">
                    <Icon icon="home" />
                </div>
                <span>Home</span>
            </Link>
            <Link to="/report" className={`nav-item ${activeMenu === 'report' ? 'active' : ''}`}>
                <div className="nav-icon">
                    <Icon icon="bar-chart-2" />
                </div>
                <span>Report</span>
            </Link>
        </div>
    )
}

export default Navigation;
