import { integer, pgTable, varchar, pgSequence, timestamp } from 'drizzle-orm/pg-core';
import { routines } from "./routines";
import { relations } from "drizzle-orm/relations";
import { sets } from "./sets";

export const workouts = pgTable("workouts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),
  order: integer().notNull().default(0),
  routineId: integer().notNull().references(() => routines.id, { onDelete: "cascade" }),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const workoutsRelations = relations(workouts, ({ one, many }) => ({
  routine: one(routines, { fields: [workouts.routineId], references: [routines.id] }),
  sets: many(sets),
}));
