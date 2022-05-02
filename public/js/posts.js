// const newPostHandler = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#posts-title').value.trim();
//     const content = document.querySelector('#posts-content').value.trim();
//     const username = document.querySelector('#posts-user_name').value.trim()

//     if (title && content && username) {
//         const response = await fetch(`/routes/posts`, {
//             method: 'POST',
//             body: JSON.stringify({ title, content, username }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.replace('/layout/app');
//         } else {
//             alert('Failed to create posts');
//         }
//     }
// };

// const commentFormHandler = async (event) => {
//     event.preventDefault();

//     const content = document.querySelector('#posts-content').value.trim();
//     const username = document.querySelector('#posts-user_name').value.trim()

//     if (content && username) {
//         const response = await fetch(`/routes/posts`, {
//             method: 'PUT',
//             body: JSON.stringify({ content, username }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.replace('/layout/app');
//         } else {
//             alert('Failed to create posts');
//         }
//     }
// };

// const editPostFormHandler = async (event) => {
//     event.preventDefault();

//     const title = document.querySelector('#posts-title').value.trim();
//     const content = document.querySelector('#posts-content').value.trim();
//     const username = document.querySelector('#posts-user_name').value.trim()

//     if (title && content && username) {
//         const response = await fetch(`/routes/posts`, {
//             method: 'PUT',
//             body: JSON.stringify({ title, content, username }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (response.ok) {
//             document.location.replace('/layout/app');
//         } else {
//             alert('Failed to edit posts');
//         }
//     }
// };

// const delPostHandler = async (event) => {
//     if (event.target.hasAttribute('post-id')) {
//         const id = event.target.getAttribute('post-id');

//         const response = await fetch(`/routes/posts/${id}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             document.location.replace('/layout/app');
//         } else {
//             alert('Failed to post comment');
//         }
//     }
// };
// if (document.querySelector('#create-post')) {
//     document
//         .querySelector('#create-post')
//         .addEventListener('submit', newPostHandler);
// };

//     document
//         .querySelector('#delete-posts')
//         .addEventListener('click', delPostHandler);

//     document
//         .querySelector('.select-posts')
//         .addEventListener('click', selectPostHandler);

//     document
//         .querySelector('#comment-posts')
//         .addEventListener('click', commentFormHandler);

//     document
//         .querySelector('#edit-posts')
//         .addEventListener('click', editPostFormHandler);
// }