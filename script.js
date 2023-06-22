function calculation() {
    try {
        document.getElementById('DisplayScn').value = eval(document.getElementById('DisplayScn').value)
    } catch {
        document.getElementById('DisplayScn').value = 'Invalid'
    }
}