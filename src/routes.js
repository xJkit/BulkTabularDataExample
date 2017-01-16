import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Load Container Pages
import { App, Home, HTMLTable, NotFound, RCTable, FixedDataTable } from 'containers';

// Root Path
const ROOT = '/';

// routes
const routes = (
  <Route path={ROOT} component={App}>
    <IndexRoute component={Home} />
    <Route path="html-table" component={HTMLTable} />
    <Route path="rc-table" component={RCTable} />
    <Route path="fixed-data-table" component={FixedDataTable} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
