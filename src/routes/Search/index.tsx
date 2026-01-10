/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../components/Button";
import "./styles.css";
import * as searchService from "../../services/search-service";
import GitProfile from "../../model/git-profile";

export default function Search() {
  const [input, setInput] = useState<string>("");

  const [gitProfile, setProfile] = useState<GitProfile>();
  const [errorMessage, setError] = useState<string>();

  console.log(gitProfile);
  console.log(errorMessage);

  return (
    <>
      <main>
        <section id="gp-section-form">
          <div className="gp-container gp-form-container">
            <form>
              <div className="gp-pb12">
                <h2>Encontre um perfil Github</h2>
              </div>
              <div className="gp-pb12">
                <input
                  id="search"
                  value={input}
                  type="text"
                  placeholder="Usuário Github"
                  onChange={handleInputChange}
                />
              </div>
              <div className="gp-pt12">
                <Button title="Encontrar" onBtClick={handleSubmitClick} />
              </div>
            </form>
          </div>

          {
            gitProfile && <h2>{gitProfile.name}</h2>
          }
        </section>
      </main>
    </>
  );

  function handleInputChange(event: any) {
    const value = event.target.value;
    setInput(value);
  }

  async function handleSubmitClick(event: any) {
    event.preventDefault();

    if (input != null && input != "") {
      const response = await searchService.getProfile(input);

      if (response instanceof GitProfile) {
        setProfile(response);
        setError(undefined);
      } else {
        setProfile(undefined);
        setError("Erro ao buscar usuário");
      }
    }

    clearInput();
  }

  function clearInput() {
    setInput("");
  }
}
