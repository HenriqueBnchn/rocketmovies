import { Container, Background, Form } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

import { MdMailOutline, MdLockOutline, MdPerson, MdArrowBackIosNew } from "react-icons/md";


export function SignUp() {
  return (

    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>
        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={MdPerson}
        />
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

        <Button title="Cadastrar"></Button>

        <TextButton address="/" title="Voltar para o login" icon={MdArrowBackIosNew}> </TextButton>
      </Form>
      <Background />
    </Container>
  )
}