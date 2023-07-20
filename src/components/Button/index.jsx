import { Container } from "./styles";


export function Button({ title, loading = false, icon: Icon, width, ...rest  }) {
  return (
    <Container type="button" style={{width: width}}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}