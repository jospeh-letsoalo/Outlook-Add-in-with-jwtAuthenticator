const db = require('../configs/database');
const { generateToken } = require('../utils/jwtUtils');
const bcrypt = require('bcryptjs');

async function login (email,password){

    const sql = "SELECT * FROM users_addsin_table WHERE email = ?  "
    try{
        const user = await db.query(sql, [email,password]);
        //console.log(user[0].password)
        if (bcrypt.compareSync(password, user[0].password)) {
            console.log("Password correct!");
            return generateToken(user.id)
        } else {
            console.log("Invalid password.");
             return '';
        }
        
    }catch(err){
       // console.log('something went wrong',err)
        return '';
    }
   
}

module.exports = { login };