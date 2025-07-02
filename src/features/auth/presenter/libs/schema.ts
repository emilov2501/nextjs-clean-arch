import z from "zod";

export const loginInputSchema = z.object({
	username: z.string().min(3).max(10),
	password: z.string().min(8).max(100),
});
