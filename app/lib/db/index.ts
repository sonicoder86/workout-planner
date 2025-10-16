import { drizzle } from 'drizzle-orm/neon-http';

import env from "../env";
import * as schema from "./schema";

const db = drizzle({
  connection: env.DATABASE_URL,
  schema,
  casing: "snake_case",
});

export default db;
