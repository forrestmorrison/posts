const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllPosts = (req, res) => {
  // SELECT ALL Posts
  pool.query("SELECT * FROM posts", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const showPost = (req, res) => {
  fetchPostById(req.params.id, res)
}

const fetchPostById = (id, res) => {
    let sql = "SELECT * FROM posts WHERE id = ?"
    // WHAT GOES IN THE BRACKETS
    sql = mysql.format(sql, [id])
  
    pool.query(sql, (err, rows) => {
      if (err) return handleSQLError(res, err)
      res.json(rows[0]);
    })
  }

const createPost = (req, res) => {
    const { title, body, userId } = req.body;
    
    // INSERT INTO POSTS
    let sql = "INSERT INTO posts (title, userId, body) VALUES (?,?,?)"
    sql = mysql.format(sql, [title, userId, body])

    pool.query(sql, (err, results) => {
        console.log('results', results)
        if (err) return handleSQLError(res, err)
        return fetchPostById(results.insertId, res)
    })
}

module.exports = {
  getAllPosts,
  createPost,
  showPost
}