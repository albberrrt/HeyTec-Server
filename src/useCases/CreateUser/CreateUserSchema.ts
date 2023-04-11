import { z } from "zod";

export const CreateUserSchema = () => {
  const schema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
  })

  return(req, res, next) => {
    const { username, email, password } = schema.parse(req.body);
    req.body = { username, email, password };
    next();
  }
}