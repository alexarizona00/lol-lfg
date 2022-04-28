const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#posts-name').value.trim();
    const needed_funding = document.querySelector('#posts-content').value.trim();
    const description = document.querySelector('#posts-desc').value.trim();

    if (name && needed_funding && description) {
        const response = await fetch(`/api/postss`, {
            method: 'POST',
            body: JSON.stringify({ name, needed_funding, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create posts');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/postss/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete posts');
        }
    }
};

document
    .querySelector('.new-posts-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.posts-list')
    .addEventListener('click', delButtonHandler);
