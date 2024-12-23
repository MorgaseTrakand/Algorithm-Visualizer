import React from 'react';

const Header = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">Sorting Algorithm Visualizer</h1>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/quick-sort">Quick Sort</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/bubble-sort">Bubble Sort</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/insertion-sort">Insertion Sort</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
