<script setup lang="ts">
	import { useAlert } from '@volverjs/ui-vue/composables'
	import type { User } from '~/models/User'

	const { addAlert, removeAlert, alerts } = useAlert()

	const users = ref<User[]>([])
	const onSubmit = (user: User) => {
		users.value.push(user)
		nextTick(() => {
			addAlert({
				title: `User added`,
				content: `${user.firstName} ${user.lastName}`,
				modifiers: 'success',
			})
		})
	}
</script>

<template>
	<div class="bg-surface-2 rounded-md">
		<div class="flex flex-col items-center">
			<div class="uppercase text-xl py-md">Create User</div>
			<div class="rounded-md form-shadow w-3/4">
				<PjCreateUserForm @submit="onSubmit" />
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
	<VvAlertGroup
		name="alerts"
		:items="alerts"
		position="fixed"
		inline="end"
		block="bottom"
		@close="removeAlert">
	</VvAlertGroup>
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
