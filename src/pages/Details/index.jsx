import { Container, Content, Tags } from "./styles";
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag";
import { TextButton } from "../../components/TextButton"


import { MdArrowBackIosNew, MdStarHalf, MdStar, MdSchedule } from "react-icons/md";


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <TextButton address="/home" title="Voltar" icon={MdArrowBackIosNew}></TextButton>
          <div className="main_title">
            <h1>Interestellar</h1>
            <div className="rating">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStarHalf />
            </div>
          </div>
          <div className="item_dados">
            <img src="https://github.com/HenriqueBnchn.png" alt="" />
            <span>Por Henrique Bianchini</span>
            <MdSchedule />
            <span>23/05/22 às 08:00</span>
          </div>
          <Tags>
            <Tag title="Ficção Científica" />
            <Tag title="Terror" />
            <Tag title="Drama" />
            <Tag title="Ação" />
          </Tags>
          <div className="descricao">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae fugit veniam facilis, soluta modi alias, sit animi aliquam ullam illum eius voluptate adipisci voluptates ipsum perspiciatis sequi, possimus itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ab quas recusandae, illo possimus reiciendis beatae mollitia labore dolorum est iusto nostrum eos voluptatum perspiciatis eaque commodi praesentium. Nesciunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta rerum laudantium quisquam delectus quo sint tempore reiciendis, obcaecati debitis. Corporis voluptas vel pariatur rerum accusamus amet obcaecati cumque laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam commodi sit, quasi laborum facere omnis dicta consequatur. Eligendi nemo, laboriosam repellat voluptas facere suscipit sit provident reiciendis quisquam commodi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, suscipit aliquid! Soluta accusamus sunt tenetur reprehenderit illum nam eveniet cumque, commodi qui, earum eum, voluptatum aliquam asperiores et repellendus accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam suscipit ullam cumque reprehenderit consequuntur enim maiores amet accusamus, eum officia quia ipsa odio aperiam nihil quis expedita laudantium explicabo temporibus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae fugit veniam facilis, soluta modi alias, sit animi aliquam ullam illum eius voluptate adipisci voluptates ipsum perspiciatis sequi, possimus itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ab quas recusandae, illo possimus reiciendis beatae mollitia labore dolorum est iusto nostrum eos voluptatum perspiciatis eaque commodi praesentium. Nesciunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta rerum laudantium quisquam delectus quo sint tempore reiciendis, obcaecati debitis. Corporis voluptas vel pariatur rerum accusamus amet obcaecati cumque laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam commodi sit, quasi laborum facere omnis dicta consequatur. Eligendi nemo, laboriosam repellat voluptas facere suscipit sit provident reiciendis quisquam commodi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, suscipit aliquid! Soluta accusamus sunt tenetur reprehenderit illum nam eveniet cumque, commodi qui, earum eum, voluptatum aliquam asperiores et repellendus accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam suscipit ullam cumque reprehenderit consequuntur enim maiores amet accusamus, eum officia quia ipsa odio aperiam nihil quis expedita laudantium explicabo temporibus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae fugit veniam facilis, soluta modi alias, sit animi aliquam ullam illum eius voluptate adipisci voluptates ipsum perspiciatis sequi, possimus itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ab quas recusandae, illo possimus reiciendis beatae mollitia labore dolorum est iusto nostrum eos voluptatum perspiciatis eaque commodi praesentium. Nesciunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta rerum laudantium quisquam delectus quo sint tempore reiciendis, obcaecati debitis. Corporis voluptas vel pariatur rerum accusamus amet obcaecati cumque laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam commodi sit, quasi laborum facere omnis dicta consequatur. Eligendi nemo, laboriosam repellat voluptas facere suscipit sit provident reiciendis quisquam commodi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, suscipit aliquid! Soluta accusamus sunt tenetur reprehenderit illum nam eveniet cumque, commodi qui, earum eum, voluptatum aliquam asperiores et repellendus accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam suscipit ullam cumque reprehenderit consequuntur enim maiores amet accusamus, eum officia quia ipsa odio aperiam nihil quis expedita laudantium explicabo temporibus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae fugit veniam facilis, soluta modi alias, sit animi aliquam ullam illum eius voluptate adipisci voluptates ipsum perspiciatis sequi, possimus itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis ab quas recusandae, illo possimus reiciendis beatae mollitia labore dolorum est iusto nostrum eos voluptatum perspiciatis eaque commodi praesentium. Nesciunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta rerum laudantium quisquam delectus quo sint tempore reiciendis, obcaecati debitis. Corporis voluptas vel pariatur rerum accusamus amet obcaecati cumque laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam commodi sit, quasi laborum facere omnis dicta consequatur. Eligendi nemo, laboriosam repellat voluptas facere suscipit sit provident reiciendis quisquam commodi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, suscipit aliquid! Soluta accusamus sunt tenetur reprehenderit illum nam eveniet cumque, commodi qui, earum eum, voluptatum aliquam asperiores et repellendus accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam suscipit ullam cumque reprehenderit consequuntur enim maiores amet accusamus, eum officia quia ipsa odio aperiam nihil quis expedita laudantium explicabo temporibus?
            </span>
          </div>
        </Content>
      </main>
    </Container>
  )
}