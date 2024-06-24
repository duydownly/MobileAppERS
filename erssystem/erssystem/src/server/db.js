const { Client } = require('pg');

// PostgreSQL client setup
const client = new Client({
  user: 'dizzytran',
  host: 'appmobile-7048.6xw.aws-ap-southeast-1.cockroachlabs.cloud',
  database: 'postgres',
  password: 'Kr8IHehDv3T8yHAqLQMVWQ',
  port: 26257,
  ssl: {
    rejectUnauthorized: true,
  },
});

// Connect to CockroachDB
const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to CockroachDB');
  } catch (err) {
    console.error('Error connecting to CockroachDB', err);
  }
};

module.exports = { client, connectDB };
