import { z } from "zod"

export const testSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export const testsSchema = z.array(testSchema)

export type Tests = z.infer<typeof testSchema>
