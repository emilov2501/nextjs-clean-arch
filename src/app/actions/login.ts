'use server'

import { actionClient } from "@/shared/api/action-client";
import { z } from "zod";
import { AppContainer } from "../libs/container";

const inputSchema = z.object({
  username: z.string().min(3).max(10),
  password: z.string().min(8).max(100),
});

export const loginAction = actionClient.inputSchema(inputSchema).action(async ({parsedInput: {username, password}}) => {
  const result = await AppContainer.getInstance().loginFeature.login(username, password)
  console.log(result)
  return {
    success: true,
  }
})