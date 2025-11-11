//your code here!
const list = document.getElementById("list");

// Function to create a list item
function createListItem(index) {
  const li = document.createElement("li");
  li.textContent = `Item ${index}`;
  return li;
}

// Add initial 10 list items
let itemCount = 10;
for (let i = 1; i <= itemCount; i++) {
  list.appendChild(createListItem(i));
}

// Detect scroll and load more items
window.addEventListener("scroll", () => {
  // Check if user scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    // Add 2 more items
    for (let i = itemCount + 1; i <= itemCount + 2; i++) {
      list.appendChild(createListItem(i));
    }
    itemCount += 2;
  }
});

