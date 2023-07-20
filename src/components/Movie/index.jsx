import { Container, Description, Tags } from "./styles";
import { Tag } from "../Tag"

import { MdStarHalf, MdStar } from "react-icons/md";


export function Movie() {
  return (
    <Container>
      <div className="film_title">
        <h1>Interestellar</h1>
        <div className="rating">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStarHalf />
        </div>
      </div>
      <Description>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi dolor ut rerum et doloremque aperiam ab molestias cupiditate quisquam sunt aliquid repellat debitis commodi, voluptatum deserunt porro accusantium inventore? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id cumque dolores. Officiis quis ratione placeat harum omnis dolor alias culpa, molestias dignissimos, totam illum dolorem nemo maiores quam esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cumque. Commodi ex amet molestias cumque odit culpa provident ipsum quisquam accusantium vel beatae in omnis, accusamus obcaecati qui illum! Eligendi?
        </p>
      </Description>
      <Tags>
        <Tag title="Ficção Científica"></Tag>
        <Tag title="Espaço"></Tag>
        <Tag title="Drama"></Tag>
      </Tags>
    </Container>
  )

}