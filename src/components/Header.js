import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mt-5">
      <div className="container pt-5 text-center">
        <p className="lead">
          Made with{" "}
          <span role="img" aria-label="rock and roll">
            🤘
          </span>{" "}
          by{" "}
          <strong>
            <Link
              to="https://worldofwarcraft.com/en-gb/character/pozzo-delleternita/Devilseethe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devilseethe
            </Link>
          </strong>{" "}
          of Well of Eternity -&nbsp;
          <strong>Bnet:</strong> Holydeath#2942 -<strong> Discord:</strong>{" "}
          @Devilseethe#8308
        </p>
        <p className="lead">
          Based on the fantastic{" "}
          <Link
            target="_blank"
            to="https://docs.google.com/spreadsheets/d/1xHvIxX5TE0ZMYTKBzkaRNFQTJzYQJhhho8KuyK4CB0w/htmlview?sle=true#"
            rel="noopener noreferrer"
          >
            lexicon
          </Link>{" "}
          written by <mark>Медифк, Ревущий Фьорд, Банхаммер</mark>
          -&nbsp; <strong>Bnet:</strong> Medivh#2545.
        </p>
        <hr className="mb-4 mt-5" />
      </div>
      <div className="container">
        <p className="text-center text-md-left">
          This is a small tool you can use to keep track of your progress during
          the first three / four weeks of BfA. Started out as an exercise to
          improve my React skills it's turned out{" "}
          <strong>could be useful</strong> to other people. Note that{" "}
          <strong>
            some tasks listed will not be available in game at launch
          </strong>{" "}
          yet I decided to list them so I do not have to do it later.{" "}
        </p>
        <hr className="mb-4 mt-5" />
      </div>
    </header>
  );
};

export default Header;
