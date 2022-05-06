import { Button, Htag, Rating } from "../components";
import { Paragragh } from "./../components/Paragragh/Paragragh";
import { Tag } from "./../components/Tag/Tag";
import { useState } from "react";
import { withLayout } from "../Layout/Layout";

function Home() {
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
    </>
  );
}

export default withLayout(Home);
