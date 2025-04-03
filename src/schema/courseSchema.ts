import { image } from "@/components/searchImage/types";
import { chapterStateType } from "@/types/chapterSliceTypes";
import { json, pgTable, varchar } from "drizzle-orm/pg-core";

export const courseTable = pgTable("course", {
  id: varchar("id").primaryKey().notNull(),
  ownerId: varchar("ownerId").notNull(),
  courseTitle: varchar("courseTitle").notNull(),
  courseDescription: varchar("courseDescription").notNull(),
  category: varchar("category").notNull(),
  level: varchar("level").notNull(),
  totalDuration: varchar("totalDuration").notNull(),
  chapters: json().$type<chapterStateType>().notNull(),
  courseImage: json().$type<image>().notNull(),
  createdAt: varchar().notNull(),
});
