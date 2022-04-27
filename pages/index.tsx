import { Button, Htag } from "../components";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Курсы</Htag>
      <Button appereance="primary">Узнать подробнее</Button>
      <Button appereance="ghost">Смотреть далее</Button>
    </>
  );
}
