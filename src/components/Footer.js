import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="footer is-flex">
      <div className="content has-text-centered">
        <p>
          <strong>ToDo List</strong> by{" "}
          <Link to="https://thinkstudio.pl">Krzysztof Kamieniecki</Link>.
          JavaScript Developer
          <Link to="http://opensource.org/licenses/mit-license.php">MIT</Link>.
          The website content is licensed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
