import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Nome do repositório",
  description: "",
  link: "https://google.com" 
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
