import { db } from "@/configs/db";
import { userTable } from "@/schema/userSchema";
import { checkAi } from "@/utils/checkAi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { eq } from "drizzle-orm";

export const getUser = createAsyncThunk(
  "user/get",
  async (userId: string, thunkApi) => {
    try {
      const [result] = await db
        .select()
        .from(userTable)
        .where(eq(userTable.userId, userId));
      return result;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  },
);

export const checkApi = createAsyncThunk(
  "api/get",
  async ({ apiKey, userId }: { apiKey: string; userId: string }, thunkApi) => {
    try {
      const result = await checkAi(apiKey);
      if (result) {
        const user = { apiKey, userId };
        const existingUser = await db
          .select()
          .from(userTable)
          .where(eq(userTable.userId, userId));
        if (!existingUser.length) {
          await db.insert(userTable).values(user);
        } else {
          await db
            .update(userTable)
            .set(user)
            .where(eq(userTable.userId, user.userId));
        }
        return user;
      } else if (result === null) {
        return result;
      }
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  },
);
