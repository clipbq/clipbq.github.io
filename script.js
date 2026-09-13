const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const toast = document.querySelector(".toast");

document.querySelectorAll(".copy-chip").forEach(button => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied!";
      toast.textContent = "Copied to your clipboard";
    } catch {
      button.textContent = "Done";
      toast.textContent = "Demo action complete";
    }

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
      button.textContent = "Copy";
    }, 1400);
  });
});

document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", event => event.preventDefault());
});
