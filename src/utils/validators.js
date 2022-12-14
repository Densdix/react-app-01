export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const emptyField = (value) => {
    return value ? undefined : "Field is empty"
}