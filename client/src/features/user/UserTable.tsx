import { useUser } from "./user.api";

function UserTable() {
  const { data } = useUser();

  return <div>{JSON.stringify(data)}</div>;
}

export default UserTable;
