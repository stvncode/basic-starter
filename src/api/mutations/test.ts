import { api } from "../api"
import { Tests } from "../schema/test"

export const createTest = ({ payload }: { payload: Tests }) =>
  api.post(`/tests`, payload).then((res) => res.data)

export const deleteTest = ({ testId }: { testId: string }) =>
  api.delete(`/tests/${testId}`).then((res) => res.data)

export const updateTest = ({ payload }: { payload: Tests }) =>
  api.put(`/tests`, payload).then((res) => res.data)
