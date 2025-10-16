CREATE TABLE "routines" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"cover" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
