import React from "react";

const Header = () => {
  return (
    <header className="mt-5">
      <div className="container pt-5 text-center">
        <p class="lead">
          Made with 🤘 by{" "}
          <strong>
            <a
              href="https://worldofwarcraft.com/en-gb/character/pozzo-delleternita/Devilseethe"
              target="_blank"
            >
              Devilseethe
            </a>
          </strong>{" "}
          of Well of Eternity -&nbsp;
          <strong>Bnet:</strong> Holydeath#2942.
        </p>
        <p class="lead">
          Based on the fantastic{" "}
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1xHvIxX5TE0ZMYTKBzkaRNFQTJzYQJhhho8KuyK4CB0w/htmlview?sle=true#"
          >
            lexicon
          </a>{" "}
          written by <mark>Медифк, Ревущий Фьорд, Банхаммер</mark>
          -&nbsp; <strong>Bnet:</strong> Medivh#2545.
        </p>
        <hr className="mb-4 mt-5" />
      </div>
      <div className="container">
        <p>
          This is a small tool you can use to keep track of your progress during
          the first three / four weeks of BfA. Started out as an exercise to
          improve my React skills it's turned out{" "}
          <strong>could be useful</strong> for other people. Note that{" "}
          <strong>some tasks will be not listed</strong> until they will be
          available in game (warfronts, M+ etc).{" "}
          <p className="mt-2">
            <u>To report a bug, a typo or a suggestion</u> send me a message on{" "}
            <strong>Discord</strong>
            <mark>@Devilseethe#8308</mark>.
          </p>
        </p>
        <hr className="mb-4 mt-5" />
      </div>
    </header>
  );
};

export default Header;
