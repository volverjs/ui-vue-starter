import { z } from 'zod'

export enum UserRole {
	User = 'user',
	Teacher = 'teacher',
	Admin = 'admin',
}

export const UserSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	nickname: z.string().default('').optional(),
	age: z.number().int().min(18),
	email: z.string().email(),
	role: z.nativeEnum(UserRole),
})

export type User = z.infer<typeof UserSchema>
