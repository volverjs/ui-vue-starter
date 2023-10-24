export type Alert = {
    id: string | number
    group: string
    title?: string
    icon: string | Record<string, unknown>
    content?: string
    footer?: string
    modifiers: 'success' | 'info' | 'warning' | 'danger' | 'brand' | 'accent'
    dismissable: boolean
    autoClose: number
    timestamp: number
}

const DEFAULT_ALERT_AUTO_CLOSE = 10000
const DEFAULT_ALERT_MODIFIERS = 'info'
const DEFAULT_ALERT_DISMISSABLE = true
const DEFAULT_ALERT_INFO_ICON = 'information'
const DEFAULT_ALERT_SUCCESS_ICON = 'check-circle'
const DEFAULT_ALERT_WARNING_ICON = 'warning'
const DEFAULT_ALERT_DANGER_ICON = 'error'
const DEFAULT_ALERT_GROUP = 'default'

export const useAlertStore = defineStore('alert', () => {
    const groups = ref(new Map<string, Map<string, Alert>>())

    const addAlert = (
        {
            id = Date.now(),
            group = DEFAULT_ALERT_GROUP,
            title,
            icon,
            content,
            footer,
            modifiers = DEFAULT_ALERT_MODIFIERS,
            dismissable = DEFAULT_ALERT_DISMISSABLE,
            autoClose = DEFAULT_ALERT_AUTO_CLOSE,
        } = {} as Partial<Alert>,
    ) => {
        if (!groups.value.has(group)) {
            groups.value.set(group, new Map<string, Alert>())
        }
        const groupMap = groups.value.get(group)
        const normalizedModifiers =
            typeof modifiers === 'string' ? modifiers.split(' ') : modifiers
        if (!icon) {
            switch (true) {
                case normalizedModifiers.includes('success'):
                    icon = DEFAULT_ALERT_SUCCESS_ICON
                    break
                case normalizedModifiers.includes('info'):
                    icon = DEFAULT_ALERT_INFO_ICON
                    break
                case normalizedModifiers.includes('warning'):
                    icon = DEFAULT_ALERT_WARNING_ICON
                    break
                case normalizedModifiers.includes('danger'):
                    icon = DEFAULT_ALERT_DANGER_ICON
                    break
                default:
                    icon = DEFAULT_ALERT_INFO_ICON
            }
        }
        groupMap?.set(id.toString(), {
            id,
            group,
            title,
            icon,
            content,
            footer,
            modifiers,
            dismissable,
            autoClose,
            timestamp: Date.now(),
        })
    }

    const removeAlert = (id: string | number, group = DEFAULT_ALERT_GROUP) => {
        const groupMap = groups.value.get(group)
        groupMap?.delete(id.toString())
    }

    const getAlerts = (group = DEFAULT_ALERT_GROUP) => {
        return computed(() => {
            const groupMap = groups.value.get(group)
            return groupMap && groupMap instanceof Map
                ? Array.from(groupMap?.values()).sort(
                      (a, b) => a.timestamp - b.timestamp,
                  )
                : []
        })
    }

    const getAlertGroup = (group = DEFAULT_ALERT_GROUP) => {
        return computed(() => ({
            items: getAlerts(group).value,
            onClose: removeAlert,
        }))
    }

    return {
        groups,
        addAlert,
        removeAlert,
        getAlerts,
        getAlertGroup,
    }
})
