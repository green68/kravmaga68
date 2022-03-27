import './Header.css';

// eslint-disable-next-line react/prop-types
function Header({ page, menuClick }) {
  const content = () => {
    return ['Accueil', 'Saisies', 'Bilan'].map((item) => {
      if (page === item.toLowerCase()) {
        return <div className="menu active">{item}</div>;
      }
      return <div className="menu" onClick={e => menuClick(item.toLowerCase())} >{item}</div>;
    });
  };

  return (
    <header className="main-header">
      {content()}
    </header>
  );
}

export { Header as default };
