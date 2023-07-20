import { Link } from "react-router-dom";
import { Container } from "./styles";




export function TextButton({ title, address, icon: Icon }) {
  return (
    <Container>
      <Link to={address}>
        {Icon && <Icon size={20} />}
        {title}
      </Link>
    </Container>
  )
}