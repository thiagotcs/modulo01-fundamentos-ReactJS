import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Carvalho Silva"
        content="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fuga amet facilis architecto labore aut molestias culpa ex atque, cumque libero, delectus quaerat, soluta deserunt nulla dolore fugit tempora ipsum!"
      />
      <Post
        author="Silva"
        content="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe fuga amet facilis architecto labore aut molestias culpa ex atque, cumque libero, delectus quaerat, soluta deserunt nulla dolore fugit tempora ipsum!"
      />
      <Post />
      <Post />
      <Post />
    </>
  );
}

// JSX = JavaScript + XML
// Default Exports vs Named Exports
