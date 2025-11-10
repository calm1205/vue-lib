import { defineStore } from "pinia"

interface User {
  id: string
  name: string
  email: string
}
interface UserState {
  user: User | null
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    user: null,
  }),
  actions: {
    async fetchUser(apiClient: () => Promise<{ data: User }>): Promise<void> {
      const { data } = await apiClient()
      this.user = data
    },
    async logout(apiClient: () => Promise<void>): Promise<void> {
      await apiClient()
      this.user = null
    },
  },
})
