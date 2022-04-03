import axios from "axios";

const fetchUsers = async (search) => {
  const { data } = await axios(
    `${process.env.REACT_APP_GITHUB_ANDPOINT}/search/users?q=${search}`
  );

  return data;
};

export { fetchUsers };
