import React, { useEffect, useState } from 'react';
import { UnsplashService } from 'services/UnsplashService';

export const ImageDetails = ({ match }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await new UnsplashService().getPhoto(match.params.photoId);
      setData(response);
    }

    fetchData();
  }, []);

  return (
    <>
      {data && (
        <div className="columns">
          <div className="column is-8">
            <img src={data.urls.full} alt={data.alt_description} />
          </div>
          <div className="column is-4">
            <div className="columns is-multiline">
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
                      <td>{data.exif.model}</td>
                    </tr>
                    <tr>
                      <td><strong>tags</strong></td>
                      <td>
                        {data.tags.map((tag) => `${tag.title}, `)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="column is-full table-container">                
                <div className="level">
                  <h4 className="is-size-4 has-text-grey-dark level-left">
                    <figure className="image is-48x48 level-item">
                      <img src={data.user.profile_image.medium} alt={data.user.name} />                    
                    </figure>
                    <span className="level-item">Author</span>                  
                  </h4>
                </div>
                <table className="table is-hoverable is-fullwidth">
                  <tbody>
                    <tr>
                      <td><strong>name</strong></td>
                      <td>{data.user.name}</td>
                    </tr>
                    <tr>
                      <td><strong>bio</strong></td>
                      <td>{data.user.bio}</td>
                    </tr>
                    <tr>
                      <td><strong>instagram</strong></td>
                      <td>{data.user.instagram_username}</td>
                    </tr>
                    <tr>
                      <td><strong>location</strong></td>
                      <td>{data.user.location}</td>
                    </tr>
                    <tr>
                      <td><strong>portfolio</strong></td>
                      <td>{data.user.portfolio_url}</td>
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
