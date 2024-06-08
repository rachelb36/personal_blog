document.addEventListener('DOMContentLoaded', function () {
  const blogContainer = document.getElementById('blogContainer');
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Reverse the blogPosts array to display posts in descending order
  blogPosts.reverse();

  blogPosts.forEach((post) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = post.title;

    const content = document.createElement('p');
    content.textContent = post.content;

    const user = document.createElement('p');
    user.textContent = `Posted by: ${post.userName}`;

    card.appendChild(title);
    card.appendChild(content);
    card.appendChild(user);

    blogContainer.appendChild(card);
  });

  document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html';
  });
});
