import { integer, pgTable, varchar, pgSequence, timestamp } from 'drizzle-orm/pg-core';
import { relations } from "drizzle-orm/relations";
import { workouts } from "./workouts";

export const routines = pgTable("routines", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),
  cover: varchar(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const routinesRelations = relations(routines, ({ many }) => ({
  workouts: many(workouts),
}));