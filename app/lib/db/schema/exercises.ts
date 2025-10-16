import { integer, pgTable, varchar, pgSequence, timestamp } from 'drizzle-orm/pg-core';
import { relations } from "drizzle-orm/relations";
import { sets } from "./sets";

export const exercises = pgTable("exercises", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),
  cover: varchar(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const exercisesRelations = relations(exercises, ({ many }) => ({
  sets: many(sets),
}));
