import db from "~/lib/db";

export default defineEventHandler(async (event) => {
  return await db.query.routines.findMany({ with: { workouts: true } });
});
