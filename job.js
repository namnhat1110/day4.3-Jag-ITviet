async function onDeleteJob() {
    const id = window.location.href.split('?')[1].split('=')[1]
    const resp = fetch('http://localhost:3000/api/jobs/' + id, {
        method: 'delete'
    })
    const json = await resp.json()
}