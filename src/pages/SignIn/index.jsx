import { Container, Background, Form } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

import { MdMailOutline, MdLockOutline } from "react-icons/md";


export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>
        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={MdMailOutline}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={MdLockOutline}
        />

        <Button title="Entrar"></Button>

        <TextButton address="/register" title="Criar conta" />
      </Form>
      <Background />
    </Container>
  )
}