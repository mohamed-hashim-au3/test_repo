const required = (message = "This field is required!") => ({
    required: true,
    message
})

const email = (message = "This is not a valid E-mail!") => ({
    type: 'email',
    message
})

export default {
    required,
    email
}