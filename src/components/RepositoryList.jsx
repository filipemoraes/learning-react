import './../styles/repositories.scss';
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Nome do repositório",
  description: "",
  link: "https://google.com" 
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
