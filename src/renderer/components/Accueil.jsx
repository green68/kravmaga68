import './Accueil.css';
import icon from '../../../assets/icon.png';

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Comptabilité</h1>
      {/* <div className="Hello">
        <a
          href="https://github.com/green68/kravmaga68"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Lien github
          </button>
        </a>
      </div> */}
    </div>
  );
};

export { Accueil as default };
