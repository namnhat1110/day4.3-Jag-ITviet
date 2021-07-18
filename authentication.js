const signinForm = document.getElementById('signin-form')

signinForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submit')
    const password = document.getElementById('password').value

    if (password === 'magic') {
        localStorage.setItem('admin', true)
    }
})