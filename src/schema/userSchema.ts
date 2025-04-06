import { pgTable, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  userId: varchar("userId").primaryKey().notNull(),
  apiKey: varchar("apiKey").notNull(),
});
