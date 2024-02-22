import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EditUserModal from "./EditUserModal";
import AddUserModal from "./AddUserModal";

const Home = () => {
  const [data, setData] = useState([]);
  const [showUpdateModal, setUpdateModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
   const [showAddUserModal, setShowAddUserModal] = useState(false);
  const fetchData = () => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (user) => {
    setCurrentUser(user);
    setUpdateModal(true);
  };
  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then((res) => {
        console.log(res);
        fetchData(); // Fetch the updated data
      })
      .catch((err) => console.log(err));
    };
    const handleAddUser = (newUser) => {
      axios
        .post("http://localhost:3000/users", newUser)
        .then((res) => {
          console.log(res);
          setShowAddUserModal(false);
          fetchData(); // Fetch the updated data
        })
        .catch((err) => console.log(err));
    };

  return (
    <div className="d-flex bg-secondary vh-100 justify-content-center align-items-center ">
      <div>
        <h2 className="text-center text-white">USERS LIST</h2>
        <Button
          variant="primary mb-2 text-white"
          onClick={() => setShowAddUserModal(true)}
        >
          Add User
        </Button>{" "}
        <AddUserModal
          show={showAddUserModal}
          handleClose={() => setShowAddUserModal(false)}
          handleAddUser={handleAddUser}
        />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Age</th>
              <th>Place</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.user_name}</td>
                <td>{user.age}</td>
                <td>{user.place}</td>
                <td>
                  <Button variant="primary" onClick={() => handleEdit(user)}>
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(user.user_id)}
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <EditUserModal
          show={showUpdateModal}
          handleClose={() => setUpdateModal(false)}
          user={currentUser}
          fetchData={fetchData}
        />
      </div>
    </div>
  );
};

export default Home;
