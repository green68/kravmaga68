import './Header.css';

// eslint-disable-next-line react/prop-types
function Header({ page }) {
  const content = () => {
    return ['Accueil', 'Saisies', 'Bilan'].map((item) => {
      if (page === item.toLowerCase()) {
        return <div className="menu active">{item}</div>;
      }
      return <div className="menu">{item}</div>;
    });
  };

  return (
    <header className="main-header">
      {content()}
      {/* <div className={if({page} == "accueil") return 'active'}>Accueil</div>
            <div>Saisies</div>
            <div>Bilan</div> */}
    </header>
  );
}

export { Header as default };
