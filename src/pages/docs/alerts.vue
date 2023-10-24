<template>
	<div class="flex items-center">
		<vv-radio-group
			v-bind="{
				name: 'position-inline',
				label: 'Position Inline',
				vertical: true,
			}"
			v-model="attrs.positionInline"
			:data-testData="attrs.positionInline"
			data-testId="element">
			<label class="vv-radio" for="position-start">
				<input
					id="position-start"
					v-model="attrs.positionInline"
					type="radio"
					name="position-inline"
					value="start" />
				start
			</label>

			<label class="vv-radio" for="position-middle">
				<input
					id="position-middle"
					v-model="attrs.positionInline"
					type="radio"
					name="position-inline"
					value="middle" />
				middle
			</label>

			<label class="vv-radio" for="position-end">
				<input
					id="position-end"
					v-model="attrs.positionInline"
					type="radio"
					name="position-inline"
					value="end" />
				end
			</label>

			<div>
				Value:
				<span data-testId="value">{{ attrs.positionInline }}</span>
			</div>
		</vv-radio-group>

		<vv-radio-group
			v-bind="{
				name: 'position-block',
				label: 'Position Block',
				vertical: true,
			}"
			v-model="attrs.positionBlock"
			:data-testData="attrs.positionBlock"
			data-testId="element">
			<label class="vv-radio" for="position-top">
				<input
					id="position-top"
					v-model="attrs.positionBlock"
					type="radio"
					name="position-block"
					value="top" />
				top
			</label>

			<label class="vv-radio" for="position-center">
				<input
					id="position-center"
					v-model="attrs.positionBlock"
					type="radio"
					name="position-block"
					value="center" />
				center
			</label>

			<label class="vv-radio" for="position-bottom">
				<input
					id="position-bottom"
					v-model="attrs.positionBlock"
					type="radio"
					name="position-block"
					value="bottom" />
				bottom
			</label>

			<div>
				Value:
				<span data-testId="value">{{ attrs.positionBlock }}</span>
			</div>
		</vv-radio-group>

		<vv-checkbox-group
			v-bind="{
				name: 'checkbox-group',
				vertical: true,
			}"
			data-testId="element">
			<label class="vv-checkbox vv-checkbox--toggle" for="auto-close">
				<input
					id="auto-close"
					v-model="attrs.autoCloseEnabled"
					type="checkbox"
					name="auto-close" />
				Auto close
			</label>

			<label class="vv-checkbox vv-checkbox--toggle" for="stack">
				<input
					id="stack"
					v-model="attrs.stackEnabled"
					type="checkbox"
					name="stack" />
				Stack
			</label>

			<label class="vv-checkbox vv-checkbox--toggle" for="reverse">
				<input
					id="reverse"
					v-model="attrs.reverseEnabled"
					type="checkbox"
					name="reverse" />
				Reverse
			</label>

			<label class="vv-checkbox vv-checkbox--toggle" for="notification">
				<input
					id="notification"
					v-model="attrs.notificationEnabled"
					type="checkbox"
					name="notification" />
				Notification
			</label>
		</vv-checkbox-group>
		<vv-button class="i-h-25" style="height: 25%" @click="addNewAlert()"
			>Add Alert</vv-button
		>
	</div>

	<VvAlertGroup
		v-bind="{
			name: 'group',
			position: 'fixed',
			inline: attrs.positionInline,
			block: attrs.positionBlock,
			reverse: attrs.reverseEnabled,
			stack: attrs.stackEnabled,
			autoClose: attrs.autoCloseEnabled,
			items: alerts,
		}"
		@close="removeAlert" />
</template>

<script setup lang="ts">
	import { useAlert } from '@volverjs/ui-vue/composables'

	const { addAlert, removeAlert, alerts } = useAlert()

	const attrs = ref({
		positionInline: 'start',
		positionBlock: 'top',
		autoCloseEnabled: false,
		stackEnabled: false,
		reverseEnabled: false,
		notificationEnabled: false,
	})

	function addNewAlert() {
		const modifiers = ['success', 'danger', 'warning', 'info']
		let randomModifier = null

		if (attrs.value.notificationEnabled) {
			randomModifier = [modifiers[Math.floor(Math.random() * 4)]]
			randomModifier.push('notification')
		} else {
			randomModifier = modifiers[Math.floor(Math.random() * 4)]
		}

		addAlert({
			title: 'Title',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			modifiers: randomModifier,
			icon: ['heart', 'block', 'music', 'key'][
				Math.floor(Math.random() * 4)
			],
			autoClose: attrs.value.autoCloseEnabled ? 5000 : 0,
		})
	}
</script>
