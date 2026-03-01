// Dynamically display Category button -------------->
const loadCategoryButton = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((data) => displayCategoryButton(data));
};

const displayCategoryButton = (categories) => {
  // 1. Get the container and set the All button to innerHTML.
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = `
        <div><button class="btn btn-outline btn-primary rounded-3xl " >All</button></div>
    `;
  // 2. Get into every category
  categories.forEach((category) => {
    // 3.Create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button class="btn btn-outline btn-primary rounded-3xl " >${category}</button>
    `;
    // 4. Append into container.
    categoryContainer.appendChild(btnDiv);
  });
};

loadCategoryButton();
