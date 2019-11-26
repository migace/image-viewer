import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulma/bulma.sass";

import { UnsplashService } from 'services';
import { Navbar } from 'components/Navbar';
import { ImageViewer } from 'scenes/ImageViewer';
import { ImageDetails } from 'scenes/ImageDetails';
import { LocalCollection } from 'scenes/LocalCollection';

import './App.css';

export const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await new UnsplashService().getPhotos();
      setImages(response);
    }

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <section className="section">
        <div className="container">
          <Switch>
            <Route path="/details/:photoId">
              <ImageDetails />
            </Route>
            <Route path="/local-collection">
              <LocalCollection />
            </Route>
            <Route path="/">
              <ImageViewer images={images} />
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  );
}
