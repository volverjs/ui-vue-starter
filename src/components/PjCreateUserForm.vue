<script setup lang="ts">
	import { useForm } from '@volverjs/form-vue'
	import { UserSchema, UserRole } from '~/models/User'
	import type { User } from '~/models/User'

	const { VvForm, VvFormWrapper, VvFormField } = useForm(UserSchema, {
		lazyLoad: true,
	})

	const props = defineProps(['userData'])
	const formData: Ref<User> = ref({} as User)

	watch(
		() => props.userData,
		() => (formData.value = props.userData),
	)

	const emit = defineEmits<{ (e: 'submit', value: User): void }>()

	const onSubmit = () => {
		emit('submit', formData.value)
		formData.value = {} as User
	}
</script>

<template>
	<VvForm v-model="formData" class="p-md" @submit="onSubmit">
		<div class="">
			<VvFormWrapper v-slot="{ invalid }" name="personal-data">
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
						<VvFormField type="email" name="email" label="Email" />
						<VvFormField type="number" name="age" label="Age" />
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
</template>
