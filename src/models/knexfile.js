require("dotenv").config();

module.exports = {
  cliente: "postgresql",
  client: "pg",
  connection: {
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false, // Ignora a verificação do certificado SSL
    },
  },
};
