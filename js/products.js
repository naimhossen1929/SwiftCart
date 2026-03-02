// Dynamically display Category button -------------->
const loadCategoryButton = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((data) => displayCategoryButton(data));
};

const loadAllProducts = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllProduct(data));
};

const displayAllProduct = (products) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  for (let product of products) {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `<div class="card bg-base-100 w-full shadow-sm">
          <figure class ="bg-gray-300 h-56 flex items-center justify-center p-4">
            <img class = "object-contain h-full"
              src="${product.image}"
        
            />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center gap-24 md:gap-12 lg:gap-3 mb-2">
              <p
                class="bg-purple-200 px-2 text-[10px] text-[#4F39F6] text-center rounded-2xl"
              >
                ${product.category}
              </p>
              <p class="text-[10px] text-gray-700">
                <i class="fa-solid fa-star text-yellow-500"></i> ${product.rating.rate} (${product.rating.count})
              </p>
            </div>
            <h3 class="text-gray-900 font-medium truncate">
              ${product.title}
            </h3>
            <h1 class="card-title mb-3">$${product.price}</h1>

            <div class="card-actions justify-between">
              <div class="btn btn-active btn-sm">
                <i class="fa-regular fa-eye"></i> Details
              </div>
              <div class="btn btn-primary btn-sm">
                <i class="fa-solid fa-cart-shopping"></i> Add
              </div>
            </div>
          </div>
        </div>`;
    productContainer.appendChild(cardDiv);
  }
};

const loadCategoryProduct = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCategoryProduct(data));
};
/* {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    "rating": {
        "rate": 3.3,
        "count": 203
    }
}
 */

const displayCategoryProduct = (products) => {
  // 1. get the container and empty the container
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  // 2. get into every product
  products.forEach((product) => {
    // create the element
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
     <div class="card bg-base-100 w-full shadow-sm">
          <figure class ="bg-gray-300 h-56 flex items-center justify-center p-4">
            <img class = "object-contain h-full"
              src="${product.image}"
        
            />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center gap-24 md:gap-12 lg:gap-3 mb-2">
              <p
                class="bg-purple-200 px-2 text-[10px] text-[#4F39F6] text-center rounded-2xl"
              >
                ${product.category}
              </p>
              <p class="text-[10px] text-gray-700">
                <i class="fa-solid fa-star text-yellow-500"></i> ${product.rating.rate} (${product.rating.count})
              </p>
            </div>
            <h3 class="text-gray-900 font-medium truncate">
              ${product.title}
            </h3>
            <h1 class="card-title mb-3">$${product.price}</h1>

            <div class="card-actions justify-between">
              <div class="btn btn-active btn-sm">
                <i class="fa-regular fa-eye"></i> Details
              </div>
              <div class="btn btn-primary btn-sm">
                <i class="fa-solid fa-cart-shopping"></i> Add
              </div>
            </div>
          </div>
        </div>
     `;
    productContainer.appendChild(cardDiv);
  });
};

const displayCategoryButton = (categories) => {
  // 1. Get the container and set the All button to innerHTML.
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = `
        <div><button onclick = "loadAllProducts()" class="btn btn-outline btn-primary rounded-3xl " >All</button></div>
    `;
  // 2. Get into every category
  categories.forEach((category) => {
    // 3.Create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button class="btn btn-outline btn-primary rounded-3xl " >${category}</button>
    `;
    btnDiv.querySelector("button").addEventListener("click", () => {
      loadCategoryProduct(category);
    });

    // 4. Append into container.
    categoryContainer.appendChild(btnDiv);
  });
};

loadCategoryButton();
