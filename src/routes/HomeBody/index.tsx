import Button from "../../components/Button";

import "./styles.css";

export default function HomeBody() {
  return (
    <>
      <main>
        <section id="gp-section">
          <div className="gp-data-home">
            <h2>Desafio Github API</h2>
            <p className="gp-mb27">DevSuperior - Escola de programação</p>
            <Button title="Começar" route="search" />
          </div>
        </section>
      </main>
    </>
  );
}
