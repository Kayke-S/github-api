import Button from "../../components/Button";

import "./styles.css";

export default function HomeBody() {
  return (
    <>
      <main>
        <section id="gp-section">
          <div className="gp-data-home">
            <h2>Desafio Github API</h2>
            <h3 className="gp-mb27">DevSuperior - Escola de programação</h3>
            <Button title="Começar" route="search" />
          </div>
        </section>
      </main>
    </>
  );
}
