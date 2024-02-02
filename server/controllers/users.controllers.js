import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tblUsers");
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUsers = async (req, res) => {
  try {
    const { user_handle, email_address, first_name, last_name, phonenumber } =
      req.body;

    const [result] = await pool.query(
      "INSERT INTO tblUsers(user_handle, email_address, first_name, last_name, phonenumber)VALUES(?,?,?,?,?)",
      [user_handle, email_address, first_name, last_name, phonenumber]
    );

    res.json({
      id: result.insertId,
      user_handle,
      email_address,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE tblUsers SET ? WHERE user_id = ?",
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM tblUsers WHERE user_id = ?",
      [req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.sendStatus(404)
    }
    return res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
