import type GitProfile from "../../model/git-profile";

import "./styles.css";

type Prop = {
  gitProfile: GitProfile;
};

export default function Card({ gitProfile }: Prop) {
  return (
    <div className="gp-card-container">
      <div className="gp-mr30">
        <img src={gitProfile.image} alt="Imagem do perfil" />
      </div>

      <div className="gp-card-container-data">
        <h3>Informações</h3>

        <div className="gp-card-list">
          <div className="gp-card-item">
            <span className="gp-fntBold">Perfil:</span>
            <span>
              <a href={gitProfile.url}>{gitProfile.url}</a>
            </span>
          </div>
          <div className="gp-card-item">
            <span className="gp-fntBold">Seguidores: </span>
            <span>{gitProfile.followers}</span>
          </div>
          <div className="gp-card-item">
            <span className="gp-fntBold">Localidade:</span>
            <span>{gitProfile.location}</span>
          </div>
          <div className="gp-card-item">
            <span className="gp-fntBold">Nome:</span>
            <span>{gitProfile.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
