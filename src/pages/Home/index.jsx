
import { Container, Button, FilmsContainer} from "./styles";
import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"

import { MdAdd } from "react-icons/md";


export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div className="main_title">
          <h1>Meus filmes</h1>
          <Button type="button">
            <MdAdd></MdAdd>
            Adicionar filme
          </Button>
        </div>
      </main>
        <FilmsContainer>
          <Movie></Movie>
          <Movie></Movie>
          <Movie></Movie>
          <Movie></Movie>
          <Movie></Movie>
        </FilmsContainer>
    </Container>
  )
}