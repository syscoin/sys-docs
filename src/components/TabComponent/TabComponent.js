import React, { Fragment, Component } from 'react';

import Source from '../../pages/markdown-page.md';

class Tab extends Component {
  state = {
    markdown: null,
  }

  render() {

    const { markdown } = this.state;

    return (
      <Fragment>
        <section className="hero">
          ... header stuff
        </section>
        <section className="section">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <Source />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Tab;
