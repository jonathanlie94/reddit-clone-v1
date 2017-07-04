import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import asyncComponent from 'components/AsyncComponent';
import Banner from 'containers/Banner';
import LanguageProvider from 'language/LanguageProvider';
const Topic = asyncComponent(() => import('./topic'));
const HomePage = asyncComponent(() => import('containers/HomePage'));

const Topics = ({ match }) =>
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/sampleTopic`}>Sample Topic</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>;

const App = (props) =>
  <LanguageProvider messages={props.messages}>
    <Router>

        <div>
          <Banner />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={HomePage} />
          <Route path="/topics" component={Topics} />
        </div>

    </Router>
  </LanguageProvider>;

export default App;
