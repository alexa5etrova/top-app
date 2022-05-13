import { Button, Htag, Rating } from "../components";
import { Paragragh } from "./../components/Paragragh/Paragragh";
import { Tag } from "./../components/Tag/Tag";
import { useState } from "react";
import { withLayout } from "../Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Курсы</Htag>
      <Button appereance="primary" arrow="right">
        Узнать подробнее
      </Button>
      <Button appereance="ghost" arrow="down" className="hghg">
        Смотреть далее
      </Button>
      <Paragragh size="small">Hey</Paragragh>
      <Paragragh size="medium">Medium</Paragragh>
      <Paragragh size="big">Big</Paragragh>
      <Tag size="medium" color="green">
        Big
      </Tag>
      <Tag size="medium" href="#" color="primary">
        Big
      </Tag>
      <Tag size="medium" href="#" color="red">
        Red
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}
export default withLayout(Home);
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
