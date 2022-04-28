const logout = async () => {
    const response = await fetch('/routes/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/layout/landing');
    } else {
        alert(response.statusText);
    }
};
document.querySelector('#logout').addEventListener('click', logout);
