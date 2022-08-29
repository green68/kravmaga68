import './Header.css';

function Header({ page, menuClick, children }) {
  console.log(children);

  return (
    <header className="main-header">
      {children}
    </header>
  );
}

export { Header as default };