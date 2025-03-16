import React from 'react';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

function Alert(props) {
    return(
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alerts.type}</strong>{props.alerts.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    )
}
// #endregion