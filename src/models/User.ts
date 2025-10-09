import z from 'zod/v4'

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
	email: z.email(),
	role: z.enum(UserRole),
})

export type User = z.infer<typeof UserSchema>
