import Card from "./Card";
import { useUser } from "../../contexts/UsersContext";

function Cards() {
  const { users } = useUser();

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {
      users == 'Loading...' ? <div style={{color: "#fff"}}>Loading...</div> : users?.items?.map((item, key) => {
        return <Card item={item} key={key} />;
      })
    }
    </div>
  );
}

export default Cards;
