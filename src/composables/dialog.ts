import VvDialog from '@volverjs/ui-vue/vv-dialog'
import type { VNode } from 'vue'

type DialogProps = {
    title?: string
    transition?: string
    size?: 'small' | 'standard' | 'fullscreen'
    role?: 'alert' | 'alertdialog'
    keepOpen?: boolean
}

type DialogSlots = {
    footer?: () => VNode | string
    header?: () => VNode | string
    default?: () => VNode | string | VNode[] | string[]
}

const isOpen = ref(false)
const title = ref<DialogProps['title']>()
const transition = ref<DialogProps['transition']>()
const size = ref<DialogProps['size']>()
const keepOpen = ref<DialogProps['keepOpen']>(false)
const role = ref<DialogProps['role']>()
const slots = ref<DialogSlots>()

export const useDialog = () => {
    const getDialog = () => {
        const onUpdateModelValue = (value: boolean) => {
            isOpen.value = value
        }

        const onAfterLeave = () => {
            title.value = undefined
            transition.value = undefined
            size.value = undefined
            keepOpen.value = undefined
            role.value = undefined
            slots.value = undefined
        }

        return defineComponent({
            name: 'PjGlobalDialog',
            render: () =>
                h(
                    VvDialog,
                    {
                        modelValue: isOpen.value,
                        title: title.value,
                        transition: transition.value,
                        size: size.value,
                        keepOpen: keepOpen.value,
                        role: role.value,
                        'onUpdate:modelValue': onUpdateModelValue,
                        onAfterLeave: onAfterLeave,
                    },
                    slots.value,
                ),
        })
    }

    const openDialog = (newProps: DialogProps, newSlots?: DialogSlots) => {
        title.value = newProps?.title
        transition.value = newProps?.transition
        size.value = newProps?.size
        keepOpen.value = newProps?.keepOpen ?? false
        role.value = newProps?.role
        slots.value = newSlots
        nextTick(() => {
            isOpen.value = true
        })
        return isOpen
    }

    return { getDialog, openDialog }
}
