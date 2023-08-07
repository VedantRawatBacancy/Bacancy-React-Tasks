import User from "./User";
import { useData } from "../context/ContextProvider";

//The [ npm run server ] needs to be run post [ npm run dev ] for the code to work as intended.
// The Localhost 3000 is used as the hosting server, and the webapp runs on 5173 (Vite Server)

const UserList = () => {

  const {users} = useData();

  return (
    <div>
      {users.map((val) => (
        <User
          key={val.id}
          id={val.id}
          img={val.avatar}
          name={val.name}
          email={val.email}
        />
      ))}
    </div>
  );
};

export default UserList;
