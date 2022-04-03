import { useState } from "react";
import { useUser } from "../../contexts/UsersContext";
import { fetchUsers } from "../../api";

function Header() {
  const [search, setSearch] = useState("");
  const { setUsers } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();
    setUsers("Loading...")

    const data = await fetchUsers(search)
    setUsers(data)
    
    setSearch("");
  }

  return (
    <div
      style={{
        backgroundColor: "#444",
        height: 50,
        display: "flex",
        alignItems: "center"
      }}
    >
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setSearch(e.target.value)} value={search} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Header;
