import "./App.css";
import { userState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [ListOfUsers, setListOfUSers] = useState([
    // {
    //   id: 1,
    //   name: "goh",
    //   age: 20,
    //   username: "goh",
    // },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUserame] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.get("http://localhost:3001/createUser", {
      // name: name,
      // age: age,
      // username: username,
      name,
      age,
      username,
    }).then((response) => {
      alert("USER CREATED");
      // setListOfUsers(response.data);
      setListOfUsers([
        ...ListOfUsers,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="userDisplay">
        {ListOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUSer}>Create User</button>
      </div>
    </div>
  );
}

export default App;
