<script setup lang="ts">
	import { useForm } from '@volverjs/form-vue'
	import { useAlert } from '@volverjs/ui-vue/composables'
	import { type User, UserSchema, UserRole } from '~/models/User'

	const { t } = useI18n()
	const { t: $t } = useI18n({
		useScope: 'global',
	})

	// form definition
	const { VvForm, VvFormWrapper, VvFormField, formData } = useForm(
		UserSchema,
		{
			lazyLoad: true,
		},
	)

	// list of users
	const { addAlert } = useAlert()
	const users = ref<Set<Partial<User>>>(new Set())

	const onSubmit = () => {
		if (!formData.value) {
			return
		}
		users.value.add(formData.value)
		addAlert({
			title: $t('pj.message.addSuccess'),
			icon: 'akar-icons:check',
			content: `${formData.value.firstName} ${formData.value.lastName}`,
			modifiers: 'success',
		})
		formData.value = undefined
	}

	const onDelete = (user: Partial<User>) => {
		users.value.delete(user)
		addAlert({
			title: $t('pj.message.deleteSuccess'),
			icon: 'akar-icons:check',
			content: `${user.firstName} ${user.lastName}`,
			modifiers: 'success',
		})
	}
</script>

<template>
	<PjHeader
		:section="$t('pj.section.examples')"
		:title="t('title')"
		class="mb-lg">
		{{ t('description') }}
	</PjHeader>

	<div class="grid md:grid-cols-3 gap-lg">
		<VvForm
			v-model="formData"
			class="flex flex-col gap-md md:col-span-2 md:order-2"
			@submit="onSubmit">
			<VvAccordionGroup not collapse item-modifiers="bordered">
				<VvFormWrapper v-slot="{ invalid }" name="personal-data">
					<VvAccordion
						:title="t('personalData')"
						name="personal-data"
						:class="{
							'border-danger': invalid,
						}">
						<VvFormField
							type="text"
							name="firstName"
							:label="t('firstName')"
							floating />
						<VvFormField
							type="text"
							name="lastName"
							:label="t('lastName')"
							floating />
						<VvFormField
							type="text"
							name="nickname"
							:label="t('nickname')"
							floating />
						<VvFormField
							type="text"
							name="email"
							:label="t('email')"
							floating />
						<VvFormField
							type="number"
							name="age"
							:label="t('age')"
							floating />
					</VvAccordion>
				</VvFormWrapper>
				<VvFormWrapper v-slot="{ invalid }" name="other-fields">
					<VvAccordion
						:title="t('otherFields')"
						name="other-fields"
						:class="{
							'border-danger': invalid,
						}">
						<div>
							<VvFormField
								type="combobox"
								name="role"
								:label="t('role')"
								strategy="fixed"
								floating
								:options="[
									UserRole.User,
									UserRole.Admin,
									UserRole.Teacher,
								]" />
						</div>
					</VvAccordion>
				</VvFormWrapper>
			</VvAccordionGroup>
			<VvButton
				icon="akar-icons:plus"
				:label="$t('pj.action.add')"
				type="submit" />
		</VvForm>
		<ul
			class="rounded-lg bg-surface-2 p-xs flex flex-col gap-md border border-surface-4">
			<li v-for="(user, index) in users" :key="index">
				<VvCard modifiers="bordered">
					<template #header>
						{{ user.firstName }} {{ user.lastName }}
					</template>
					<template #content>
						<VvButtonGroup item-modifiers="action" class="ml-auto">
							<VvButton
								icon="akar-icons:trash-bin"
								:label="$t('pj.action.delete')"
								@click.stop="onDelete(user)" />
						</VvButtonGroup>
					</template>
				</VvCard>
			</li>
			<li
				v-if="users.size === 0"
				class="flex items-center p-xs justify-center gap-xs text-word-2">
				<VvIcon name="akar-icons:info" class="text-24" />
				{{ $t('pj.message.noData') }}
			</li>
		</ul>
	</div>
</template>

<i18n lang="json">
{
	"en": {
		"title": "Forms",
		"description": "This page shows how to use the form component.",
		"personalData": "Personal data",
		"otherFields": "Other fields",
		"role": "Role",
		"save": "Save",
		"firstName": "First name",
		"lastName": "Last name",
		"nickname": "Nickname",
		"email": "Email",
		"age": "Age"
	}
}
</i18n>
