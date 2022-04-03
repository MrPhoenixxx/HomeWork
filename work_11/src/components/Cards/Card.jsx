import { useUser } from "../../contexts/UsersContext";

function Card({ item }) {
  const { login, avatar_url, html_url, id } = item;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ccc",
        padding: 5,
        width: 600
      }}
    >
      <img style={{width: 200, height: 150}} src={avatar_url} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          gap: 10,
          height: "max-content"
        }}
      >
        <h4 style={{ margin: 0 }}>Name: {login}</h4>
        <div>ID: {id}</div>
        <a href={html_url}>
          <button>Go to profile</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
