import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path="*" status={404} code={404}/>

    </Layout>
);
