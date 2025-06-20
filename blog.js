const posts = [
  {
    title: "How to Start Coding with AI",
    image: "images/ai-coding.jpg",
    preview: "Learn how to use AI tools like ChatGPT to speed up your coding process...",
    link: "post1.html"
  },

  ,
  {
    title: "Getting Started with Sass",
    image: "images/sass.jpg",
    preview: "Sass makes CSS more powerful with variables and functions. Let’s install it...",
    link: "post2.html"
  },
  
];

const postsPerPage = 2;
let currentPage = 1;

function showPosts() {
  const blogSection = document.getElementById("blog-posts");
  blogSection.innerHTML = "";

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = posts.slice(start, end);

  paginatedPosts.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="content">
        <h2>${post.title}</h2>
        <p>${post.preview}</p>
        <a href="${post.link}">Read More</a>
      </div>
    `;
    blogSection.appendChild(card);
  });

  document.getElementById("page-number").textContent = `Page ${currentPage}`;
}

function nextPage() {
  if ((currentPage * postsPerPage) < posts.length) {
    currentPage++;
    showPosts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPosts();
  }
}

// Load first page
showPosts();
