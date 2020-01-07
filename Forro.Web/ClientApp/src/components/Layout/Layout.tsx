import * as React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <div id="page-wrapper">
            <Header />
            {props.children}
            <Footer />
        </div>
    </React.Fragment>
);
