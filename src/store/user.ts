import { defineStoreRepository } from '@volverjs/query-vue'
import { HttpClient, RepositoryHttp } from '@volverjs/data'
import { type User } from '~/models/User'

/* Create an HttpClient instance */
const httpClient = new HttpClient({
	prefixUrl: 'http://localhost:3000/',
})

/* Create a RepositoryHttp instance */
const usersRepository = new RepositoryHttp<User>(httpClient, 'users/:id?')

/* Create a store repository composable */
export const useUsersStore = defineStoreRepository(
	usersRepository,
	// the store name
	'user',
)
