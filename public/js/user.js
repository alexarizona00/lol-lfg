const newFormHandler = async (event) => {
    event.preventDefault();

    const league_Ign = document.querySelector('#user-league-Ign').value.trim();
    const role = document.querySelector('#user-role').value.trim();
    const rank = document.querySelector('#user-rank').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (league_Ign && role && rank && email && password) {
        const response = await fetch(`/routes/users`, {
            method: 'POST',
            body: JSON.stringify({ league_ign, role, rank, email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update profile');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/routes/users/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/layout/landin/');
        } else {
            alert('Failed to delete profile');
        }
    }
};

document
    .querySelector('.edit-profile')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.delete-profile')
    .addEventListener('click', delButtonHandler);