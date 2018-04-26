var {Client} = require('pg');

//var URL = process.env.URL || 'postgresql://postgres:admin@localhost/cineperla';
var client = new Client(process.env.DATABASE_URL || 'postgresql://postgres:admin@localhost/cineperla');

client.connect((err) => {
  if(err)
    console.error(err);
  else
    console.log('Database Started');
});

async function INSERT(table, attr, values, returning = null) {
  var sql = `INSERT INTO ${table} (${attr}) VALUES (${values})`;
  if(returning !== null)
    sql += ` RETURNING ${returning}`

  return await client.query(sql);
}

async function SELECT(table, attr = '*', where = null, orderBy = null) {
  var sql = `SELECT ${attr} FROM ${table}`;
  if(where !== null)
    sql += ` WHERE ${where}`;
  if(orderBy !== null)
    sql += ` ORDER BY ${orderBy}`;

  return await client.query(sql);
}

async function UPDATE(table, setters, where) {
  var sql = `UPDATE ${table} SET ${setters} WHERE ${where}`;
  return await client.query(sql);
}

async function DELETE(table, where) {
  var sql = `DELETE FROM ${table} WHERE ${where}`

  return await client.query(sql);
}

module.exports = {
  SELECT,
  UPDATE,
  INSERT,
  DELETE
};
