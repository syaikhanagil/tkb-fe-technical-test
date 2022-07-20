import React from 'react';
import Icon from './Icon';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-item" style={{cursor: "pointer"}}>
                    <Icon icon="arrow-left" />
                    <span>Kembali</span>
                </div>
            </header>
        )
    }
}

export default Header;