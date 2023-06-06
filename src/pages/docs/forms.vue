<script setup lang="ts">
	import { useForm } from '@volverjs/form-vue'
	import { useAlert } from '@volverjs/ui-vue/composables'
	import { UserSchema, UserRole } from '~/models/User'
	import type { User } from '~/models/User'

	const { addAlert } = useAlert()
	const { VvForm, VvFormWrapper, VvFormField } = useForm(UserSchema, {
		lazyLoad: true,
	})

	const formData: Ref<User> = ref({} as User)
	const users = ref<User[]>([])
	const onSubmit = () => {
		users.value.push(formData.value)
		nextTick(() => {
			addAlert({
				title: `User added`,
				content: `${formData.value.firstName} ${formData.value.lastName}`,
				modifiers: 'success',
			})
			formData.value = {} as User
		})
	}
</script>

<template>
	<div class="bg-surface-2 rounded-md">
		<div class="flex flex-col items-center">
			<div class="uppercase text-xl py-md">Create User</div>
			<div class="rounded-md form-shadow w-3/4">
				<VvForm v-model="formData" class="p-md" @submit="onSubmit">
					<div class="">
						<VvFormWrapper
							v-slot="{ invalid }"
							name="personal-data">
							<VvAccordion
								title="Personal data"
								:class="{
									'border border-warning rounded': invalid,
								}">
								<div>
									<VvFormField
										type="text"
										name="firstName"
										label="First name" />
									<VvFormField
										type="text"
										name="lastName"
										label="Last name" />
									<VvFormField
										type="text"
										name="nickname"
										label="Nickname" />
									<VvFormField
										type="text"
										name="email"
										label="Email" />
									<VvFormField
										type="number"
										name="age"
										label="Age" />
								</div>
							</VvAccordion>
						</VvFormWrapper>
						<VvFormWrapper v-slot="{ invalid }" name="other-fields">
							<VvAccordion
								title="Other fields"
								:class="{
									'border border-warning rounded': invalid,
								}">
								<div>
									<VvFormField
										type="combobox"
										name="role"
										label="Role"
										strategy="fixed"
										:options="[
											UserRole.User,
											UserRole.Admin,
											UserRole.Teacher,
										]" />
								</div>
							</VvAccordion>
						</VvFormWrapper>
					</div>
					<div class="text-right mt-lg">
						<VvButton icon="add" label="Save" type="submit" />
					</div>
				</VvForm>
			</div>
		</div>
		<div
			class="p-md border-l border-solid border-alpha-1 flex flex-col justify-center">
			<div class="flex flex-col justify-center h-4/5 overflow-x-hidden">
				<TransitionGroup name="list" tag="article">
					<VvCard
						v-for="user in users"
						:key="user.firstName"
						class="mb-sm">
						<template #header>
							{{ user.firstName }} {{ user.lastName }}
						</template>
						<div class="p-md">
							<p>{{ user.role }}</p>
							<p>{{ user.email }}</p>
							<p>{{ user.age }} years old</p>
							<p>
								nickname:
								{{ user.nickname || 'nickname not provided' }}
							</p>
						</div>
					</VvCard>
				</TransitionGroup>
			</div>
		</div>
		<PjFooter />
	</div>
</template>

<style lang="scss">
	.form-shadow {
		box-shadow: 0 0 7px 4px var(--color-surface-1);
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>
