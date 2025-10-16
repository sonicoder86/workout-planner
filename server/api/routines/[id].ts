import db from "~/lib/db";
import { eq, asc } from "drizzle-orm";
import { routines, workouts } from "~/lib/db/schema";

export default defineEventHandler(async (event) => {
  const routineId = Number(event.context.params?.id);
  const routine = await db.query.routines.findFirst({
    where: eq(routines.id,routineId),
    with: {
      workouts: {
        orderBy: asc(workouts.order),
      },
    },
  });

  if (!routine) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
    });
  }

  return routine;
});
