import { Section } from "../components/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import List from "../components/List/List";
import { Link } from "react-router-dom";

const ItemList = () => {
  return <>
    <Header />
    <Section>
      <Title name={"Write notes, Keep your memories"} /> 
      <Link to="/add">Add</Link>
      <Link to="/edit/8">Add</Link>
      <List/>
    </Section>
  </>
  
}

export default ItemList;