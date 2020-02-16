import React from "react";
import { Link } from "react-router-dom";

function SelectToolPage() {
  return (
    <div className="SelectToolPage">
      <Link to={`panther`}>
        <a>Panther</a>
      </Link>
      <Link to={`cheetah`}>
        <a>Cheetah</a>
      </Link>
    </div>
  );
}

export default SelectToolPage;
