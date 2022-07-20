import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

interface IMain {
    children: any,
    activeMenu?: string
}

const Main = (props: IMain) => {
    const { children, activeMenu } = props;
    return (
        <>
            <Header />
            <div className="container-fluid">
                {children}
            </div>
            <Navigation activeMenu={activeMenu} />
        </>
    )
}

export default Main;
