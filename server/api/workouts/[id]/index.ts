import db from "~/lib/db";
import { eq, asc } from "drizzle-orm";
import { sets, workouts } from "~/lib/db/schema";

export default defineEventHandler(async (event) => {
  const workoutId = Number(event.context.params?.id);
  const workout = await db.query.workouts.findFirst({
    where: eq(workouts.id, workoutId),
    with: {
      routine: true,
    }
  });

  if (!workout) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found',
    });
  }

  const workoutSets = await db.query.sets.findMany({
    where: eq(sets.workoutId, workoutId),
    with: {
      exercise: true,
    },
    orderBy: asc(sets.order)
  });

  return {
    workout,
    sets: workoutSets,
  };
});
