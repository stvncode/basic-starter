import { createQueryKeys } from "@lukemorales/query-key-factory"
import { useQuery } from "@tanstack/react-query"

import { api } from "../api"
import { testsSchema } from "../schema/test"

export const testsKeys = createQueryKeys("tests", {
  get: () => ({
    queryKey: [{}],
    queryFn: async () => {
      const { data } = await api.get(`/tests`)

      return testsSchema.parse(data)
    },
  }),
})

export const useTestQuery = () =>
  useQuery({
    ...testsKeys.get(),
  })
