import React from 'react';

import { Wrapper } from './styles';

export const SearchBar = () => (
  <Wrapper>
    <form className="form">
      <div className="field">
        <p className="control has-icons-left">
          <input className="input is-warning" type="text" placeholder="Search" />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>
    </form>
  </Wrapper>
);
