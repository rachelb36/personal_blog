const userName = document.getElementById('userName');
const title = document.getElementById('title');
const content = document.getElementById('content');
const saveButton = document.getElementById('save');

saveButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Check if all fields are filled
  if (!userName.value || !title.value || !content.value.trim()) {
    const message = document.querySelector('.message');
    message.textContent = 'All fields must be filled out.';
    message.style.color = 'red';
    return;
  }

  const blogPost = {
    userName: userName.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
  };

  // Retrieve existing posts from localStorage or initialize an empty array
  const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  // Add new post to the array
  existingPosts.push(blogPost);
  // Save the updated array back to localStorage
  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
  // Redirect to the blog.html page
  window.location.href = 'blog.html';
});

// Clear the form when the page loads
window.addEventListener('load', () => {
  userName.value = '';
  title.value = '';
  content.value = '';
  document.querySelector('.message').textContent = '';
});
