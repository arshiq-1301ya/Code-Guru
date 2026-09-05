// ==========================================
// STEP 4 & 5: Application Settings & LocalStorage
// ==========================================
const DEFAULT_SETTINGS = Object.freeze({
  storageKey: "bookmarksData",
  categories: ["Work", "Study", "Entertainment"],
  defaultCategory: "Work"
});

// Application State
let bookmarks = [];
let currentFilter = "All";

// DOM Elements Selection
const bookmarkForm = document.getElementById("bookmarkForm");
const websiteTitleInput = document.getElementById("websiteTitle");
const websiteUrlInput = document.getElementById("websiteUrl");
const categorySelect = document.getElementById("category");
const bookmarksList = document.getElementById("bookmarksList");
const filterButtons = document.querySelectorAll(".filter-btn");

// Save current bookmarks state to localStorage
function saveBookmarks() {
  localStorage.setItem(DEFAULT_SETTINGS.storageKey, JSON.stringify(bookmarks));
}

// Load stored bookmarks from localStorage
function loadBookmarks() {
  const storedData = localStorage.getItem(DEFAULT_SETTINGS.storageKey);
  if (storedData) {
    try {
      bookmarks = JSON.parse(storedData);
    } catch (error) {
      console.error("Error parsing stored bookmarks:", error);
      bookmarks = [];
    }
  } else {
    bookmarks = [];
  }
}

// ==========================================
// STEP 2: Category Filtering Logic
// ==========================================
function filterBookmarks(categoryFilter) {
  if (categoryFilter === "All") {
    return bookmarks;
  }
  return bookmarks.filter(bookmark => bookmark.category === categoryFilter);
}

// ==========================================
// STEP 1b: Render Bookmarks Function
// ==========================================
function renderBookmarks() {
  // Clear previous entries
  bookmarksList.innerHTML = "";

  const filteredBookmarks = filterBookmarks(currentFilter);

  // Handle empty state
  if (filteredBookmarks.length === 0) {
    bookmarksList.innerHTML = "<p>No bookmarks found.</p>";
    return;
  }

  // Loop through items and build UI elements dynamically
  filteredBookmarks.forEach(bookmark => {
    const item = document.createElement("div");
    item.classList.add("bookmark-item");

    const info = document.createElement("div");
    info.classList.add("bookmark-info");

    const title = document.createElement("h3");
    title.textContent = bookmark.title;

    const link = document.createElement("a");
    link.href = bookmark.url;
    link.textContent = bookmark.url;
    link.target = "_blank";
    link.classList.add("bookmark-link");

    const category = document.createElement("div");
    category.classList.add("bookmark-category");
    category.textContent = bookmark.category;

    info.appendChild(title);
    info.appendChild(link);
    info.appendChild(document.createElement("br"));
    info.appendChild(category);

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // STEP 3: Attach deletion closure callback
    deleteBtn.addEventListener("click", () => {
      deleteBookmark(bookmark.id);
    });

    item.appendChild(info);
    item.appendChild(deleteBtn);

    bookmarksList.appendChild(item);
  });
}

// ==========================================
// STEP 1a: Form Input Handling
// ==========================================
function addBookmark(e) {
  e.preventDefault(); // Stop page reload

  const title = websiteTitleInput.value.trim();
  const url = websiteUrlInput.value.trim();
  const category = categorySelect.value;

  if (!title || !url) return;

  const newBookmark = {
    id: Date.now(),
    title: title,
    url: url,
    category: category
  };

  bookmarks.push(newBookmark);
  saveBookmarks();
  renderBookmarks();

  bookmarkForm.reset();
}

// ==========================================
// STEP 3: Delete Functionality
// ==========================================
function deleteBookmark(id) {
  bookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  saveBookmarks();
  renderBookmarks();
}

// ==========================================
// Application Initialization
// ==========================================
function init() {
  loadBookmarks();

  // Attach submit handler to form
  bookmarkForm.addEventListener("submit", addBookmark);

  // Attach filter button click handlers
  filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");

      currentFilter = e.target.dataset.category;
      renderBookmarks();
    });
  });

  // Initial render
  renderBookmarks();
}

// Start app once DOM is ready
document.addEventListener("DOMContentLoaded", init);