import React from "react";

export const WarningMessage = ({ alert }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {alert}
    </div>
  );
};
