import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { Link, withRouter } from 'react-router-dom';
import Logo from './logo-dark.png';


function Header(props: RouteComponentProps) {
    function Toggle(name: string):string {
        if (name === 'Home' && props.location.pathname === '/')
            return 'active-item';
        if (name === 'Counter' && props.location.pathname === '/counter')
            return 'active-item';
        if (name === 'Fetch data' && props.location.pathname === '/fetch-data')
            return 'active-item';
        return '';
    }

    return (
        <header role="banner" className="position-absolute margin-top-30 margin-m-top-0 margin-s-top-0">
            <nav className="background-transparent background-transparent-hightlight full-width sticky">
                <div className="s-12 l-2">
                    <a href="index.html" className="logo">
                        <img className="logo-before" src={Logo} alt="" />
                        <img className="logo-after" src={Logo} alt="" />
                    </a>
                </div>
                <div className="s-12 l-10">
                    <div className="top-nav right">
                        <ul className="right chevron">
                            <li className={Toggle('Home')}><Link to="/">Home</Link></li>
                            <li className={Toggle('Counter')}><Link to="/counter">Counter</Link></li>
                            <li className={Toggle('Fetch data')}><Link to="/fetch-data">Fetch data</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default connect()(withRouter(Header));