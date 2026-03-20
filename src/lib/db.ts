import mysql from 'mysql2/promise';

type DbGlobals = typeof globalThis & {
  __havitahPool?: mysql.Pool;
};

const globals = globalThis as DbGlobals;

const pool =
  globals.__havitahPool ??
  mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

if (process.env.NODE_ENV !== 'production') {
  globals.__havitahPool = pool;
}

export default pool;
