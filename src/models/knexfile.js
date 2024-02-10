require("dotenv").config();

module.exports = {
  // cliente: "postgresql",
  // client: "pg",
  // connection: {
  //   database: process.env.DATABASE,
  //   user: process.env.USER_DB,
  //   password: process.env.PASSWORD_DB,
  // },
  cliente: "postgresql",
  client: "pg",
  connection: {
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false, // Ignora a verificação do certificado SSL
    },
  },
};
