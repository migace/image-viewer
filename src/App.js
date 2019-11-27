import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulma/bulma.sass";

import { Navbar } from 'components/Navbar';
import { ImageViewer } from 'scenes/ImageViewer';
import { ImageDetails } from 'scenes/ImageDetails';
import { LocalCollection } from 'scenes/LocalCollection';
import { AppProvider } from 'context/AppContext';
import { editImage, removeImage } from 'utils/behaviors';
import { reducer } from 'reducer';

import './App.css';

export const initialState = {
  images: [],
  localCollection: [],
  localIds: []
};

export const App = () => (
  <AppProvider initialState={initialState} reducer={reducer}>
    <Router>
      <Navbar />
      <section className="section">
        <div className="container">
          <Switch>
            <Route path="/details/:photoId">
              <ImageDetails onEdit={editImage} onRemove={removeImage} />
            </Route>
            <Route path="/local-collection">
              <LocalCollection />
            </Route>
            <Route path="/">
              <ImageViewer />
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  </AppProvider>
);
