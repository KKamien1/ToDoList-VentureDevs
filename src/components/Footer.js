import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>ToDo List</strong> by{" "}
          <Link to="https://thinkstudio.pl">Krzysztof Kamieniecki</Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
