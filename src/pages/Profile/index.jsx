import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


import { MdMailOutline, MdLockOutline, MdLockOpen, MdPerson, MdArrowBackIosNew, MdCameraAlt } from "react-icons/md";
import { Link } from "react-router-dom";


export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/home">
          <MdArrowBackIosNew />
          Voltar
        </Link>

      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/HenriqueBnchn.png" alt="" />
          <label htmlFor="avatar">
            <MdCameraAlt />
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input
          type="text"
          placeholder="Henrique Bianchini"
          icon={MdPerson}
        />
        <Input
          type="text"
          placeholder="henriqueoze@gmail.com"
          icon={MdMailOutline}
        />

        <div className="passwords">
          <Input
            type="password"
            placeholder="Senha atual"
            icon={MdLockOpen}
          />
          <Input
            type="password"
            placeholder="Nova senha"
            icon={MdLockOutline}
          />
        </div>

        <Button title="Salvar"></Button>
      </Form>
    </Container>
  )
} 