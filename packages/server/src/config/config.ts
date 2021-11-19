import dotenv from "dotenv";

dotenv.config();

const {
  NODE_ENV = "production",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  PORT,
} = process.env;

const CONFIG: any = {
  production: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
  },
  development: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
  },
  test: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
  },
};

export const config = CONFIG[NODE_ENV];
