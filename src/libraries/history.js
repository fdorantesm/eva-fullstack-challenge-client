import {createBrowserHistory, createMemoryHistory} from 'history';

export const createHistory = (initialEntries = ['/']) => {
    if (process.env.BROWSER) {
      const history = window.browserHistory || createBrowserHistory();
      if (process.env.NODE_ENV === 'development' && !window.browserHistory) {
        window.browserHistory = history;
      }
      return history;
    }
    return createMemoryHistory({ initialEntries });
  };