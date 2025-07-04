// Product data (10+ products)
const products = [
  {
    id: 1,
    name: "Ethiopian Sunrise",
    category: "single-origin",
    img: "img/ethiopian-sunrise.png",
    desc: "Fruity, floral, and vibrant. Perfect for pour-over.",
    price: 14.95,
    author: "Anna Brewmaster"
  },
  {
    id: 2,
    name: "Colombian Classic",
    category: "single-origin",
    img: "img/colombian-classic.png",
    desc: "Rich, chocolatey, and smooth. A timeless favorite.",
    price: 13.95,
    author: "Liam Beansmith"
  },
  {
    id: 3,
    name: "Sumatra Earth",
    category: "single-origin",
    img: "img/sumatra-earth.png",
    desc: "Earthy, spicy, and bold. For the adventurous palate.",
    price: 15.95,
    author: "Maya Barista"
  },
  {
    id: 4,
    name: "Espresso Intenso",
    category: "espresso",
    img: "img/espresso-intenso.png",
    desc: "Deep, rich, and intense. Perfect for espresso lovers.",
    price: 16.95,
    author: "Anna Brewmaster"
  },
  {
    id: 5,
    name: "Morning Blend",
    category: "blends",
    img: "img/morning-blend.png",
    desc: "Smooth and balanced. Great for every morning.",
    price: 12.95,
    author: "Liam Beansmith"
  },
  {
    id: 6,
    name: "Night Owl Decaf",
    category: "decaf",
    img: "img/night-owl-decaf.png",
    desc: "All the flavor, none of the buzz. Decaf done right.",
    price: 13.49,
    author: "Maya Barista"
  },
  {
    id: 7,
    name: "Rainforest Reserve",
    category: "single-origin",
    img: "img/rainforest-reserve.png",
    desc: "Sustainably sourced, with notes of caramel and nuts.",
    price: 15.49,
    author: "Anna Brewmaster"
  },
  {
    id: 8,
    name: "Velvet Blend",
    category: "blends",
    img: "img/velvet-blend.png",
    desc: "Silky smooth, with a hint of vanilla.",
    price: 13.95,
    author: "Liam Beansmith"
  },
  {
    id: 9,
    name: "Classic Espresso",
    category: "espresso",
    img: "img/classic-espresso.png",
    desc: "Traditional Italian-style espresso. Strong and bold.",
    price: 16.49,
    author: "Maya Barista"
  },
  {
    id: 10,
    name: "Swiss Water Decaf",
    category: "decaf",
    img: "img/swiss-water-decaf.png",
    desc: "Chemical-free decaf with a clean finish.",
    price: 14.49,
    author: "Anna Brewmaster"
  },
  {
    id: 11,
    name: "Brazilian Gold",
    category: "single-origin",
    img: "img/brazilian-gold.png",
    desc: "Smooth and nutty, with hints of chocolate. A classic Brazilian profile.",
    price: 13.79,
    author: "Anna Brewmaster"
  },
  {
    id: 12,
    name: "Caramel Dream",
    category: "blends",
    img: "img/caramel-dream.png",
    desc: "A sweet, creamy blend with caramel notes and a silky finish.",
    price: 14.29,
    author: "Liam Beansmith"
  }
];

// PRODUCTS PAGE: Render products and filter
function renderProductsGrid(filter = "all") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = "";
  let filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  if (filtered.length === 0) {
    grid.innerHTML = '<p>No products found in this category.</p>';
    return;
  }
  filtered.forEach(product => {
    grid.innerHTML += `
      <a href="product.html?id=${product.id}" class="product-card-link">
        <div class="product-card">
          <div class="product-card-img-wrapper">
            <img src="${product.img}" alt="${product.name}" draggable="false">
          </div>
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="price">CHF ${product.price.toFixed(2)}</div>
        </div>
      </a>
    `;
  });
}

const categoryFilter = document.getElementById("category-filter");
if (categoryFilter) {
  // Check for category in URL
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get("category");
  if (urlCategory && categoryFilter.querySelector(`option[value='${urlCategory}']`)) {
    categoryFilter.value = urlCategory;
    renderProductsGrid(urlCategory);
  } else {
    renderProductsGrid();
  }
  categoryFilter.addEventListener("change", e => {
    renderProductsGrid(e.target.value);
  });
}

// PRODUCT DETAIL PAGE: Render product by ID
function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}
function renderProductDetail() {
  const detail = document.getElementById("product-detail");
  if (!detail) return;
  const id = getProductIdFromUrl();
  const product = products.find(p => p.id === id);
  if (!product) {
    detail.innerHTML = '<p>Product not found.</p>';
    return;
  }
  detail.innerHTML = `
    <div class="product-detail-img">
      <img src="${product.img}" alt="${product.name}" draggable="false">
    </div>
    <div class="product-detail-info">
      <h1>${product.name}</h1>
      <p>${product.desc}</p>
      <div class="price">CHF ${product.price.toFixed(2)}</div>
      <div class="author">By ${product.author}</div>
      <form class="order-form" id="order-form">
        <button type="submit" class="btn">Buy Now</button>
        <div id="order-success" class="form-success" style="display:none;">Thank you for your purchase!</div>
      </form>
    </div>
  `;
  // Add order form handler
  const orderForm = document.getElementById("order-form");
  if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("order-success").style.display = "block";
    });
  }
}
if (window.location.pathname.endsWith("product.html")) {
  renderProductDetail();
}

// NEWSLETTER FORM
const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("newsletter-success").style.display = "block";
    newsletterForm.reset();
  });
}

// CONTACT FORM
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("contact-success").style.display = "block";
    contactForm.reset();
  });
}

// HOMEPAGE: Render New & Popular products dynamically
function renderHomeProducts() {
  const preview = document.querySelector('.products-preview .products-grid');
  if (!preview) return;
  preview.innerHTML = '';
  // Show first 3 products (or change logic as needed)
  products.slice(0, 3).forEach(product => {
    preview.innerHTML += `
      <a href="product.html?id=${product.id}" class="product-card-link">
        <div class="product-card">
          <img src="${product.img}" alt="${product.name}" draggable="false">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
        </div>
      </a>
    `;
  });
}
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html') {
  renderHomeProducts();
}

// Hamburger mobile nav
const navToggle = document.getElementById('nav-toggle');
const navContainer = document.querySelector('.nav-container');
const navOverlay = document.querySelector('.mobile-nav-overlay');
if (navToggle && navContainer) {
  navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('nav-open');
  });
  // Close nav when a link is clicked (mobile)
  const navLinks = navContainer.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navContainer.classList.remove('nav-open');
    });
  });
}
// Close nav when overlay is clicked
if (navOverlay && navContainer) {
  navOverlay.addEventListener('click', () => {
    navContainer.classList.remove('nav-open');
  });
}

// Falling coffee beans background
function spawnFallingBean() {
  const beanBg = document.getElementById('bean-bg');
  if (!beanBg) return;
  const bean = document.createElement('div');
  bean.className = 'falling-bean';
  // Use the correct PNG image as the bean
  bean.innerHTML = `<img src="img/vecteezy_coffee-bean-isolated-on-transparent-background-with-clipping_47598218.png" alt="coffee bean" style="width:100%;height:100%;opacity:0.7;">`;
  // Randomize horizontal position, size, and duration
  const left = Math.random() * 96; // percent
  const size = 18 + Math.random() * 10; // px
  const duration = 3.5 + Math.random() * 2.5; // seconds
  bean.style.left = left + 'vw';
  bean.style.width = size + 'px';
  bean.style.height = size + 'px';
  bean.style.opacity = '0.5';
  bean.style.animationDuration = duration + 's';
  beanBg.appendChild(bean);
  // Remove after animation
  setTimeout(() => bean.remove(), duration * 1000);
}
if (document.getElementById('bean-bg')) {
  setInterval(spawnFallingBean, 400);
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.style.userSelect = 'none';
    img.style.pointerEvents = 'none';
    if (img.parentElement && img.parentElement.tagName === 'A') {
      img.parentElement.setAttribute('draggable', 'false');
    }
  });
}); 