import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import OverviewPage from './pages/OverviewPage/index';
import CampaignsPage from './pages/CampaignsPage/index';
import IntelligencePage from './pages/IntelligencePage/index';
import SupportPage from './pages/SupportPage/index';

import Section from './components/Section/index';
import Topbar from './components/Topbar/index';

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className="app">

                <Section blockMods={['top']}>
                    <Topbar />
                </Section>

                <Section blockMods={['main']}>
                    <Redirect from="/" to="/overview" />
                    <Route exact path="/overview" component={OverviewPage} />
                    <Route path="/campaigns" component={CampaignsPage} />
                    <Route path="/intelligence" component={IntelligencePage} />
                    <Route path="/support" component={SupportPage} />
                </Section>

            </div>
        </Router>
    </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;