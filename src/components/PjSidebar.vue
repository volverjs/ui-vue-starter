<script lang="ts" setup>
	withDefaults(
		defineProps<{
			menuItems: {
				title: string
				children?: {
					label: string
					to?: string | Record<string, unknown> | undefined
				}[]
			}[]
		}>(),
		{
			menuItems: () => [],
		},
	)
</script>

<template>
	<nav class="vv-nav vv-nav--sidebar w-288 p-md">
		<ul class="vv-nav__menu" role="menu">
			<template
				v-for="(block, blockIndex) in menuItems"
				:key="blockIndex">
				<li class="vv-nav__item" role="presentation">
					<span
						id="sidebar-label"
						class="vv-nav__heading-label"
						aria-hidden="true">
						{{ block.title }}
					</span>
					<ul
						class="vv-nav__menu"
						role="menu"
						aria-labelledby="sidebar-label">
						<li
							v-for="(item, index) in block.children"
							:key="index"
							class="vv-nav__item"
							role="presentation">
							<VvAction
								:to="item.to"
								class="vv-nav__item-label"
								role="menuitem">
								{{ item.label }}
							</VvAction>
						</li>
					</ul>
				</li>
				<li
					v-if="blockIndex !== menuItems.length - 1"
					class="vv-nav__divider"
					role="separator"></li>
			</template>
		</ul>
	</nav>
</template>
