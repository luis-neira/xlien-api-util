'use strict';

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    charset: 'utf8',
    client: 'pg',
    debug: process.env.DEBUG || false,
    pool: {
      min: 2,
      max: parseInt(process.env.MAX_DB_CONNECTIONS) || 50,
    },
    acquireConnectionTimeout: 10_000,
    connection: {
      host: process.env.RDS_HOSTNAME || process.env.POSTGRES_HOST || 'database',
      port: parseInt(process.env.RDS_PORT) || parseInt(process.env.POSTGRES_PORT) || 5432,
      user: process.env.RDS_USERNAME || process.env.POSTGRES_USER || 'fastlane',
      password: process.env.RDS_PASSWORD || process.env.POSTGRES_PASSWORD || 'password',
      database: process.env.POSTGRES_DB_NAME || 'fastlane',
      ssl: (process.env.POSTGRES_SSL === 'true'),
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: `./seeds/${process.env.NODE_ENV}`,
    },
  },
};
