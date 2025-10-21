import { defineStore } from 'pinia'
import api from '@/services/api'

export interface User {
  id: number
  name: string
  email: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    totalUsers: (state) => state.users.length
  },

  actions: {
    async fetchUsers() {
      this.isLoading = true
      this.error = null
      try {
        const response = await api.get('/users')
        this.users = response.data
      } catch (err: any) {
        this.error = err.message || 'Erro ao buscar usuários'
        console.error(err)
      } finally {
        this.isLoading = false
      }
    },

    addUser(user: User) {
      this.users.push(user)
    }
  }
})