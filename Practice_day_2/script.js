// Fetch meal data from API
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
  .then((res) => res.json())
  .then((data) => {
    operation(data.meals); // Show meals as cards
    searchBar(data.meals); // Enable the search bar
  })
  .catch((err) => {
    console.log(err);
  });

// Function to display meal cards
const operation = (data) => {
  const box = document.getElementById("product");

  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("col-md-3"); // 4 products per row on medium devices and above

    let htmlContent = `
      <div class="card">
        <img src="${element.strMealThumb}" class="card-img-top" alt="${
      element.strMeal
    }">
        <div class="card-body">
          <h5 class="card-title">${element.strMeal}</h5>
          <p class="card-text">${element.strInstructions.slice(0, 30)}...</p>
          <div class="d-flex gap-2">
            <button class="btn btn-primary btn-lg">Details</button>
            <button class="btn btn-outline-primary btn-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    `;

    div.innerHTML = htmlContent;
    box.appendChild(div);
  });
};

// Function to filter search results
const find_all = (s, data) => {
  const output = document.getElementById("output");
  let result = "";
  let cnt = 0;

  for (let x of data) {
    if (cnt >= 4) break;
    if (x.strMeal.toLowerCase().includes(s)) {
      result += `
        <span class="p-4 text-[14px]">${x.strMeal}</span>
        <hr class="h-[2px] w-[300px] ml-4 rounded-xl bg-slate-400">
      `;
      cnt++;
    }
  }

  if (result.length === 0) {
    result = `<span class="p-4 text-[14px]"><i>not found</i></span>`;
  }

  output.innerHTML = result;
};

// Function to handle the search bar functionality
const searchBar = (data) => {
  const searchBox = document.getElementById("search");
  const output = document.getElementById("output");

  output.classList.remove("hidden");

  let s = "";

  searchBox.addEventListener("input", () => {
    s = searchBox.value.toLowerCase();

    output.innerHTML = `
      <span class="p-4 text-[14px]">${s}</span>
      <hr class="h-[2px] w-[300px] ml-4 rounded-xl bg-slate-400">
    `;

    if (s.length < 1) {
      output.classList.add("hidden");
    } else {
      output.classList.remove("hidden");
      find_all(s, data);
    }
  });
};
