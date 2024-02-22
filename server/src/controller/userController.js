import db from "../db/db.js";
export const getAllUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err });
    } else {
      res.json(results);
    }
  });
};

export const addUser = (req, res) => {
  const user = req.body;
  db.query("INSERT INTO users SET ?", user, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err });
    } else {
      res.json({ message: "User added successfully", user });
    }
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = req.body;
  db.query(
    "UPDATE users SET ? WHERE user_id = ?",
    [user, id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: err });
      } else {
        res.json({ message: "User updated successfully" });
      }
    }
  );
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE user_id = ?", id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err });
    } else {
      res.json({ message: "User deleted successfully" });
    }
  });
};
