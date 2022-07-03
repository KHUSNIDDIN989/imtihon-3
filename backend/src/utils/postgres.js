import pkg from "pg";
const { Pool } = pkg;

import connection from "../config/config.js";

const pool = new Pool({
  connectionString: connection.connectionString,
});

const fetchData = async (sql, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(sql, params);
    return rows;
  } finally {
    client.release();
  }
};

export { fetchData };
