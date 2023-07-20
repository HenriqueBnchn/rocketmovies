import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";


export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input
        placeholder="Pesquisar pelo título"
        type="text"
      />
      <Profile>
        <div className="text">
          <h1>Henrique Bianchini</h1>
          <Link>
            sair
          </Link>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/HenriqueBnchn.png"
            alt="Foto do Usuário"
          />
        </Link>
      </Profile>
    </Container>
  )
}