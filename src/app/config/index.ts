import dotenv from 'dotenv';
import Path from 'path';

dotenv.config({ path: Path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV : process.env.NODE_ENV,
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
};