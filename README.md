# poc-smartb
React + Redux application proof of concept for <a href="http://smrtb.com/">SmartB</a>.

## Getting Started
To run project locally:

```
# clone repo
git clone https://github.com/shnatyk/poc-smartb.git

# change to project's app dir
cd poc-smartb/app

# install dependencies
npm install

# run in browser
npm start
```

## Creating App
To focus on fulfilling requirements, the configuration work has been minimized and <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> was used as a seed project (with Webpack + React preconfigured). 

Adding CSS Preprocessor like Sass was also omitted, this wasn’t the purpose of the task, pure CSS styling is completely fine for getting the main concept. However, to show some good practices and keep styles manageable and maintainable the <a href="http://getbem.com/">BEM methodology</a> was used. 

## Project Structure
From the reason that React has Component-Based-Architecture, folders and files should be as much organized per component as possible (everything that only apply to a single component should live in one place, to reuse code between components <a href="https://facebook.github.io/react/docs/composition-vs-inheritance.html">the composition model</a> should be followed). 

A <a href="https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1">very good article</a> about component-oriented organization of apps was written by Alexis Mang. This app follows its idea, however source files are structured by type (reducers, actions, components, API etc. are in different buckets), not by domain (all stuff in one bucket).

Brief explanation of the structure:

- **actions**
```
/src
    /actions
```
for defining Redux actions and methods that dispatch them.

- **api**
```
/src
    ...
    /api
```
for collecting API calls in one place.

- **components and pages**
```
/src
    ...
    /components
    /pages
```
Any component can define nested components used only in context of that component. It cannot use or define pages. A page can define nested components used only in context of that page. When specific component need to be used across page or other components it goes up to parent “components” directory, which will contain all components that need to use it (components placed in most top “components” directory are reusable across whole app).

- **helpers**
```
/src
    ...
    /helpers
```
to keep general simple methods/parsers/generators useful across whole app. Components can contain their own helpers useful only in context of component. There is one example of helper in the project - “bem.js”, has a function “classify” that generates set of BEM classes for a given block name and array of modifiers. 

- **reducers**
```
/src
    ...
    /reducers
```
Redux reducers, methods responsible for state changes in response to actions.

- **app main file**
```
/src
    ...
    index.js
```
The entry point for the app, where we define the root element and configure store for managing the app state.

- **app state store**
```
/src
    ...
    configureStore.js
```
Creating the store by using <a href="https://github.com/reactjs/redux/blob/master/docs/advanced/Middleware.md">the concept of middleware</a>, which support Redux to work with other mechanisms like routing, async API etc. 

- **app root component**
```
/src
    ...
    App.js
```
Main component, which is passing the top level state variable (store) and makes it available to any component inside it (React advanced context feature).

- **app base styles**
```
/src
    style.css
```
App scaffolding, base styles used reusable across the app.

## API
After setup and project organization there was need to come up with some data for the app state. Based on information from mock-up and to showing an example of working app state with Redux a following simple REST API on <a href="https://getsandbox.com">Sandbox</a> webservice was prepared for testing purposes:

(All requests work in current demo, to use the POST ones a REST Client is need, e.g. <a href="https://advancedrestclient.com/">Advenced REST Client</a>)

- **GET | http://poc-smartb-api.getsandbox.com/overview/active | 1500ms delay**

Data returned for Overview page with 1500ms of delay (set up in the Sandbox tool), returns object in shape of:
```
{
    items[
    {
        id,
        name,
        startDate,
        isActive,
        total {
            impressions,
            clicks,
            spend,
            revenue,
            roi,
            profit,
            dailySpend,
        }
    }],
    chart[
    {
        name
        data[],
        visible
    }],
    total {
        impressions,
        clicks,
        spend,
        revenue,
        roi,
        profit
    }
}
```

- **POST | http://poc-smartb-api.getsandbox.com/campaign/{id}/toggle**

Toggles isActive value for a campaign of given id as a URL param (replace “{id}” with id of campaign).

- **POST | http://poc-smartb-api.getsandbox.com/campaign/add**

For adding new campaign in current demo. Example of request body:

```
{
    "id": 12,
    "name": "new camp",
    "startDate": "2017/04/04",
    "isActive": true,
    "total": {
        "impressions": 1.2,
        "clicks": 61421,
        "spend": 638,
        "revenue": 962.54,
        "roi": 52.40,
        "profit": 123.34,
        "dailySpend": 0.7
    }
}
```

- **POST | http://poc-smartb-api.getsandbox.com/campaign/{id}/remove**

For removing campaign of given “id” as a URL param (replace “{id}” with id of campaign).

## App State

When the app is started and the “/overview” url is accessed by the first time a following things happen:

1. The store is created, together with initial state of the app, which further is passed to the provider. For now the state objects used to pass data to components are empty.

2. After, the route related page component (OverviewPage) is initialized and set up. Here, an important thing happens - specific reducers are binded to the page component.

3. When the page component did mount, method responsible for fetching campaigns data from the server is invoked. 

4. Fetching first fires up an action about starting the fetch request. Thanks to this, reducer updates state, the page component renders and shows up in the view with animated loaders. Second, it makes actual api call by using <a href="https://github.com/mzabriskie/axios">axios</a> library (it was choosed by a preference and experience of working with promises).

5. When there is success response from server, the success action is dispatched and response is normalized with <a href="https://github.com/paularmstrong/normalizr">normalizr</a>. Using entities simplifies work with nested resources, especially in Redux. For example, if two campaigns would have same target the store would only contain the data needed for target in entities.targets once.

6. Previous action invokes binded reducers to updated the state accordingly. Then the proper components are also updated and re-rendered. In this bouncing loaders are replaced with painted chart and complete table of active campaigns.

7. From now in the app any new data fetches related to Overview Page will just “repaint” changed parts of components (based on defined actions and binded reducers).

## Styling

- **Bootstrap 4**

To incorporate this framework into the project a <a href="https://reactstrap.github.io/">reactstrap</a> package was used. It contains React components based on Bootstrap 4. It is nice way to kick off with a React app development. Without it, using pure Bootstrap styles would involve much more work (components creation from scratch) and could lead to any issues caused by the difference in approach taken by Bootstrap vs. React. (DOM manipulation)

(<a href="https://reactstrap.github.io/components/">Complete documentation</a> of reactstrap components)

Components used in the project: Container, Row, Col, ListGroup, ListGroupItem, Progress. Some of them were extended to adjust styles to meet desired design, e.g. Porgress: 

```
#app/src/pages/OverviewPage/components/CampaignsTable/components/CampRow/components/Progress
import React, { Component } from 'react';
import { Progress as ProgressB4 } from 'reactstrap';
import './styles.css';

class Progress extends Component {
   render() {
       return (
           <ProgressB4 {...this.props} />
       );
   }
}

export default Progress;
```

Then in new “./styles.css” we can overwrite Bootstrap styles and keep things organized (in a context of new component).

- **Highcharts**

For this module also a <a href="https://github.com/kirjs/react-highcharts">special React component</a> was used. In “app/src/pages/OverviewPage/components/CampaignsChart/index.jsx” we can see that the usage is very simple - just need to set up proper config object and pass it in to a component. The config is based on a standard Highcharts configuration.

- **FontAwesome**

Simple and quick to use <a href="https://github.com/danawoodman/react-fontawesome">React package</a> for one of the most popular icons on the web. Just as an replacement for an original icons (usually provided with mock-up file).

- **Toggle button**

“An elegant, accessible <a href="https://github.com/aaronshaf/react-toggle">toggle component for React</a>”. It was used instead of required jQuery toggle buttons, because using React and jQuery may be unsafe and lead to some unwanted issues (nic and simple explanation <a href="https://hshno.de/Byai2hv0e">here</a>).

