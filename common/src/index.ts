import { z } from "zod"
// Input validation for signup
export const signupInput = z.object({
  username: z.string(),
  password: z.string()
})

// Infering type to share it for frontend validation
export type SingupInput = z.infer<typeof signupInput>
