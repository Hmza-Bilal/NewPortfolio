document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body

  // Check for saved theme preference or use default
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    body.classList.remove("dark-mode")
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")

    // Save theme preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.setItem("theme", "light")
    }
  })

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector(".nav")

  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active")

    // Toggle hamburger to X
    const spans = this.querySelectorAll("span")
    if (nav.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active")

      // Reset hamburger icon
      const spans = mobileMenuBtn.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    })
  })

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".skill-progress")

  function animateSkillBars() {
    skillBars.forEach((bar) => {
      const barTop = bar.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (barTop < windowHeight - 100) {
        const width = bar.parentElement.getAttribute("data-width")
        bar.style.width = width
      }
    })
  }

  // Set initial width to 0
  skillBars.forEach((bar) => {
    const width = bar.style.width
    bar.parentElement.setAttribute("data-width", width)
    bar.style.width = "0"
  })

  // Animate on scroll
  window.addEventListener("scroll", animateSkillBars)

  // Trigger once on load
  animateSkillBars()

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Add active class to nav links on scroll
  const sections = document.querySelectorAll("section")

  function highlightNavLink() {
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add("active")
      } else {
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.remove("active")
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)
})
