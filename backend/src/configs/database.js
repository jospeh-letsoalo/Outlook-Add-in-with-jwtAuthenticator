const mysql = require('mysql');

// Create connection pool
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Update if needed
  database: 'hico_assessment',
});

// Initialize database and create table if not exists
function initDB() {
  try {
    connection.getConnection((err, conn) => {
      if (err) {
        console.error('Failed to get MySQL connection:', err.stack);
        return;
      }

      const createTableSQL = `
        CREATE TABLE IF NOT EXISTS users_addsin_table (
          id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
      `;

      conn.query(createTableSQL, (error, results) => {
        if (error) {
          console.error('Error creating table:', error.message);
        } else {
          console.log('Employees table ensured.');
          
        
        }
        conn.release();
      });
    });
  } catch (err) {
    console.error('Database initialization failed:', err.message);
  }
}
// this is for creating temporary users for testing
function createUsers(){
  // creating temp users
  connection.getConnection((err, conn) => {
    conn.query("SELECT * FROM users_addsin_table WHERE email = 'john.doe@example.com'",[],(err,row)=>{
      if(row<1){//creating user with email test@eample.com
        const hashedPassword = require('bcryptjs').hashSync('password123', 8);
        conn.query("INSERT INTO users_addsin_table (email, password) VALUES (?, ?)", ['john.doe@example.com', hashedPassword]);
        console.log('user created john.doe@example.com')
      }else{
       // console.log('cheaking user',row)
      }
    }) 

    conn.query("SELECT * FROM users_addsin_table WHERE email = 'jane.smith@example.com'",[],(err,row)=>{
      if(row<1){//creating user with email test@eample.com
        const hashedPassword = require('bcryptjs').hashSync('password123', 8);
        conn.query("INSERT INTO users_addsin_table (email, password) VALUES (?, ?)", ['jane.smith@example.com', hashedPassword]);
          console.log('user created jane.smith@example.com')
      }
    })

  })
}
// Query helper function
function query(sql, params) {
  console.log('in the query',sql,params)
  return new Promise((resolve, reject) => {
    connection.getConnection((err, conn) => {
      if (err) {
        console.error('Failed to get connection:', err);
        return reject(err);
      }

      conn.query(sql, params, (error, results) => {
        if (error) {
          console.error('Database query error:', error.message);
          conn.release();
          return reject(error);
        }
        conn.release();
        console.log('result of the query',results)
        resolve(results);
      });
    });
  });
}

module.exports = { query, initDB,createUsers };