import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container pt-5 px-5 text-center">
        <p class="lead">
          Made with 🤘 by{" "}
          <mark>
            <strong>Devilseethe</strong>
          </mark>{" "}
          of Well of Eternity -&nbsp;
          <strong>Bnet:</strong> Holydeath#2942.
        </p>
        <p class="lead">
          Based on the{" "}
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1xHvIxX5TE0ZMYTKBzkaRNFQTJzYQJhhho8KuyK4CB0w/htmlview?sle=true#"
          >
            guide
          </a>{" "}
          written by <mark>Медифк, Ревущий Фьорд, Банхаммер</mark>
          -&nbsp; <strong>Bnet:</strong> Medivh#2545.
        </p>
        <hr className="mb-4 mt-5" />
      </div>
    </header>
  );
};

export default Header;
