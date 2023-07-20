import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { TextButton } from "../../components/TextButton"
import { NoteItem } from "../../components/NoteItem"
import { MdArrowBackIosNew, MdAdd } from "react-icons/md";



export function New() {
  return (
    <Container>
      <Header></Header>
      <main>
        <TextButton address="/home" title="Voltar" icon={MdArrowBackIosNew}></TextButton>
        <h1>Novo filme</h1>

        <div className="rolagem_y">
          <Form>
            <div className="col2">
              <Input
                placeholder="Título"
                type="text"
              />
              <Input
                placeholder="Sua nota (de 0 a 5)"
                type="number"
              />
            </div>
            <Textarea
              placeholder="Observações"
            />

            <div className="marcadores">
              <h1>Marcadores</h1>
              <div className="marcadores_fundo">
                <div className="marcadores_item">
                  <NoteItem value="React"></NoteItem>
                </div>
                <div className="marcadores_item">
                  <NoteItem isNew placeholder="Nova tag"></NoteItem>
                </div>

              </div>
            </div>
            <div className="col2">
              <Button title="Excluir filme" />
              <Button title="Salva alterações" />
            </div>
          </Form>
        </div>


      </main>

    </Container>
  )
}