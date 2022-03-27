import './Header.css';

function Header({ page, menuClick }) {
  const content = () => {
    return ['Accueil', 'Saisies', 'Bilan'].map((item) => {
      let classname = "menu"
      if (page === item.toLowerCase()) {
        classname += " active"
      }
      return <div key={item.toLowerCase()} className={classname} onClick={e => menuClick(item.toLowerCase())} >{item}</div>;
    });
  };

  return (
    <header className="main-header">
      {content()}
    </header>
  );
}

export { Header as default };
