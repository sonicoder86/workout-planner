import { integer, pgTable, varchar, pgSequence, timestamp } from 'drizzle-orm/pg-core';
import { relations } from "drizzle-orm/relations";
import { workouts } from "./workouts";
import { exercises } from "./exercises";

export const sets = pgTable("sets", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  workoutId: integer().notNull().references(() => workouts.id, { onDelete: "cascade" }),
  exerciseId: integer().notNull().references(() => exercises.id, { onDelete: "cascade" }),
  reps: integer().notNull(),
  weight: integer().notNull(),
  difficulty: integer().notNull().default(0),
  order: integer().notNull().default(0),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const setsRelations = relations(sets, ({ one }) => ({
  workout: one(workouts, { fields: [sets.workoutId], references: [workouts.id] }),
  exercise: one(exercises, { fields: [sets.exerciseId], references: [exercises.id] }),
}));
