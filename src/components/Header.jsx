import './Header.css';
import ButtonMenu from './ButtonMenu';

function Header({ page, menuClick }) {
  const content = () => {
    return ['home', 'bilan'].map((item) => {
      return <ButtonMenu 
      key={item}
      name={item} 
      page={page} 
      menuClick={item => menuClick(item)} 
      />
    });
  };

  return (
    <header className="main-header">
      {content()}
    </header>
  );
}

export { Header as default };