import React, { useEffect, useState } from 'react';
import { findIndex } from 'lodash';

import { useAppContext } from 'context/AppContext';
import { LocalStorageService, DEFAULT_KEY } from 'services/LocalStorageService';

export const ImageDetails = ({ match, history, onEdit, onRemove }) => {
  const [index, setIndex] = useState();
  const [state, dispatch] = useAppContext();

  useEffect(() => {
    setIndex(findIndex(state.localCollection, (item) =>  item.id === match.params.photoId ));
  }, []);

  const onEditHandler = (data) => () => onEdit(dispatch, data);
  const onRemoveHandler = (data) => () => {
    const localStorageService = new LocalStorageService();

    localStorageService.remove(DEFAULT_KEY, data.id);
    onRemove(dispatch, data);    
    history.push('/local-collection');
  }

  return (
    <>
      {index && state.localCollection[index] && (
        <div className="columns">
          <div className="column is-8">
            <img src={state.localCollection[index].urls.full} alt={state.localCollection[index].alt_description} />
          </div>
          <div className="column is-4">
            <div className="columns is-multiline">
              <div className="column is-full">
                <div className="buttons is-pulled-right">
                  <button className="button is-warning is-light" onClick={onEditHandler(state.localCollection[index])}>Edit</button>
                  <button className="button is-danger is-light" onClick={onRemoveHandler(state.localCollection[index])}>Remove</button>
                </div>
              </div>
              <div className="column is-full table-container">
                <h4 className="is-size-4 has-text-grey-dark">Image</h4>
                <table className="table is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>exif (model)</strong></td>
                      <td>{state.localCollection[index].exif.model}</td>
                    </tr>
                    <tr>
                      <td><strong>description</strong></td>
                      <td>{state.localCollection[index].alt_description}</td>
                    </tr>
                    <tr>
                      <td><strong>tags</strong></td>
                      <td>
                        {state.localCollection[index].tags.map((tag) => `${tag.title}, `)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="column is-full table-container">                
                <div className="level">
                  <h4 className="is-size-4 has-text-grey-dark level-left">
                    <figure className="image is-48x48 level-item">
                      <img src={state.localCollection[index].user.profile_image.medium} alt={state.localCollection[index].user.name} />                    
                    </figure>
                    <span className="level-item">Author</span>                  
                  </h4>
                </div>
                <table className="table is-hoverable is-fullwidth">
                  <tbody>
                    <tr>
                      <td><strong>name</strong></td>
                      <td>{state.localCollection[index].user.name}</td>
                    </tr>
                    <tr>
                      <td><strong>bio</strong></td>
                      <td>{state.localCollection[index].user.bio}</td>
                    </tr>
                    <tr>
                      <td><strong>instagram</strong></td>
                      <td>{state.localCollection[index].user.instagram_username}</td>
                    </tr>
                    <tr>
                      <td><strong>location</strong></td>
                      <td>{state.localCollection[index].user.location}</td>
                    </tr>
                    <tr>
                      <td><strong>portfolio</strong></td>
                      <td>{state.localCollection[index].user.portfolio_url}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>            
          </div>
        </div>
      )}    
    </>
  );
};

ImageDetails.defaultProps = {
  onEdit: () => () => {},
  onRemove: () => () => {}
};
