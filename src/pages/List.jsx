import { Section, Container } from "../components/SectionPage/SectionPage.styled";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import List from "../components/List/List";
import { AddButton } from "../components/AddBtn/AddBtn";

const ItemList = () => {
  return <>
    <Header />
    <Section>
      <Container>
        <Title name={"Write notes, Keep your memories"} /> 
        <AddButton />
        <List/>
      </Container>
    </Section>
  </>
  
}

export default ItemList;