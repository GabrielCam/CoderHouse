import React from "react";

const Alert = ({children}) => {
  return (
    <div class="alert alert-success" role="alert">
      {children}
    </div>
  );
};

export default Alert;
