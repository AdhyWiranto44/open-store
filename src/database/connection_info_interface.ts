const ConnectionInfoInterface = {
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT)
}

export default ConnectionInfoInterface