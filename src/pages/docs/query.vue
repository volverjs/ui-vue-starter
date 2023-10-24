<script setup lang="ts">
	import { useAlert } from '@volverjs/ui-vue/composables'
	import type { User } from '~/models/User'
	import { useUsersStore } from '~/store/user'

	import {
		VvDialog,
		VvDropdown,
		VvDropdownAction,
	} from '@volverjs/ui-vue/components'

	const { read, submit, remove } = useUsersStore()

	const { isLoading: isLoadingSubmit, execute: executeSubmit } = submit(
		undefined,
		undefined,
		{
			immediate: false,
		},
	)

	const { data: users, isLoading: isLoadingRead, isError, execute } = read()

	const isLoading = computed(() => {
		return isLoadingSubmit.value || isLoadingRead.value
	})

	const dialogEl = ref<typeof VvDialog>()
	const userData = ref()

	const { addAlert, removeAlert, alerts } = useAlert()

	const fillForm = (user: object) => {
		userData.value = user
		dialogEl.value?.open()
	}

	const onSubmit = async (user: User) => {
		const { isSuccess, isError } = await executeSubmit(user)

		const userAlreadyExists = () =>
			users.value.some((u) => u.id === user.id)

		if (isSuccess) {
			await execute(true)
			dialogEl.value?.close()
			userData.value = {}

			addAlert({
				title: `User ${userAlreadyExists() ? 'updated' : 'added'}`,
				content: `${user.firstName} ${user.lastName}`,
				modifiers: 'success',
				autoClose: 5000,
			})
		}

		if (isError) {
			addAlert({
				title: `Something went wrong :(`,
				content: `Try later`,
				modifiers: 'error',
				autoClose: 5000,
			})
		}
	}
</script>

<template>
	<div v-if="isLoading">Loading...</div>
	<div v-else-if="isError">An error occurred! 😭</div>
	<div v-else>
		<div class="flex justify-between mb-20">
			<h1 class="uppercase text-xl py-md">Users</h1>
			<VvButton @click="dialogEl?.open()">Add User</VvButton>
		</div>

		<table class="vv-table pt-10">
			<thead>
				<tr>
					<th>Id</th>
					<th>Full name</th>
					<th>Nickname</th>
					<th>Email</th>
					<th>Age</th>
					<th>Role</th>
				</tr>
			</thead>
			<tbody v-for="user in users" :key="user.id">
				<tr>
					<td>{{ user.id }}</td>
					<td>{{ `${user.firstName} ${user.lastName}` }}</td>
					<td>{{ user.nickname }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.age }}</td>
					<td>{{ user.role }}</td>
					<td>
						<VvDropdown placement="right">
							<VvButton modifiers="action" icon="more-vertical">
							</VvButton>
							<template #items>
								<VvDropdownAction @click="fillForm(user)">
									<VvIcon name="edit" />
									Edit
								</VvDropdownAction>
								<VvDropdownAction
									@click="remove({ id: user.id })">
									<VvIcon name="trash" />
									Delete
								</VvDropdownAction>
							</template>
						</VvDropdown>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<VvDialog id="dialog" ref="dialogEl" title="Add User" data-testId="element">
		<PjCreateUserForm :user-data="userData" @submit="onSubmit" />
	</VvDialog>

	<VvAlertGroup
		name="alerts"
		:items="alerts"
		position="fixed"
		inline="middle"
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
