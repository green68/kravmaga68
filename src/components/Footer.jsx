import './Footer.css';
import ButtonMenu from "./ButtonMenu";

const Footer = ({ page, menuClick }) => {

  const content = () => {
    return ['year', 'cash', 'bank'].map((item) => {
      return <ButtonMenu 
      key={item}
      name={item} 
      page={page} 
      menuClick={item => menuClick(item)} />
    })
  }

  return (
    <footer className="main-footer">
      {content()}
    </footer>
  )
}

export { 
  Footer as default 
}