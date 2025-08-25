// Password toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const passwordToggles = document.querySelectorAll(".password-toggle")

  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const passwordInput = this.previousElementSibling
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
      passwordInput.setAttribute("type", type)

      // Toggle eye icon
      this.classList.toggle("fa-eye")
      this.classList.toggle("fa-eye-slash")
    })
  })

  // Search functionality
  const searchInput = document.querySelector(".search-input")
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase()
      // Add search logic here
      console.log("Searching for:", searchTerm)
    })
  }

  // Category pill interactions
  const categoryPills = document.querySelectorAll(".category-pill")
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      // Remove active class from all pills
      categoryPills.forEach((p) => p.classList.remove("active"))
      // Add active class to clicked pill
      this.classList.add("active")

      const category = this.textContent.trim()
      console.log("Selected category:", category)
    })
  })

  // Product card hover effects
  const productCards = document.querySelectorAll(".product-card")
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Brand card interactions
  const brandCards = document.querySelectorAll(".brand-card")
  brandCards.forEach((card) => {
    card.addEventListener("click", function () {
      const brand = this.querySelector(".brand-logo").textContent.trim()
      console.log("Selected brand:", brand)
    })
  })

  // Cart functionality
  const cartContainer = document.querySelector(".cart-container")
  if (cartContainer) {
    cartContainer.addEventListener("click", () => {
      console.log("Cart clicked")
      // Add cart modal or navigation logic here
    })
  }

  // Form submissions
  const authForms = document.querySelectorAll(".auth-form")
  authForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const formData = new FormData(this)
      console.log("Form submitted:", Object.fromEntries(formData))
    })
  })

  // Social login buttons
  const socialButtons = document.querySelectorAll(".btn-social")
  socialButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const provider = this.classList.contains("facebook")
        ? "Facebook"
        : this.classList.contains("twitter")
          ? "Twitter"
          : "Google"
      console.log("Social login with:", provider)
    })
  })

  // Smooth scrolling for navigation
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    })
  })

  // Add to cart functionality (placeholder)
  function addToCart(productId) {
    console.log("Adding product to cart:", productId)
    // Add cart logic here
  }

  // Wishlist functionality (placeholder)
  function addToWishlist(productId) {
    console.log("Adding product to wishlist:", productId)
    // Add wishlist logic here
  }

  // Initialize tooltips if Bootstrap is available
  const bootstrap = window.bootstrap // Declare the bootstrap variable
  if (typeof bootstrap !== "undefined") {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
  }
})

// Utility functions
function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price)
}

function calculateDiscount(originalPrice, currentPrice) {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

// Animation utilities
function fadeIn(element, duration = 300) {
  element.style.opacity = 0
  element.style.display = "block"

  const start = performance.now()

  function animate(currentTime) {
    const elapsed = currentTime - start
    const progress = elapsed / duration

    if (progress < 1) {
      element.style.opacity = progress
      requestAnimationFrame(animate)
    } else {
      element.style.opacity = 1
    }
  }

  requestAnimationFrame(animate)
}

function slideDown(element, duration = 300) {
  element.style.height = "0px"
  element.style.overflow = "hidden"
  element.style.display = "block"

  const targetHeight = element.scrollHeight + "px"

  element.style.transition = `height ${duration}ms ease-out`
  element.style.height = targetHeight

  setTimeout(() => {
    element.style.height = "auto"
    element.style.overflow = "visible"
  }, duration)
}
