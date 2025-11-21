let accordions = document.querySelectorAll(".nx-accordion");

accordions.forEach((acc) => {
  acc.addEventListener("click", function () {

    // Close all panels first
    accordions.forEach(btn => {
      if (btn !== this) {
        btn.classList.remove("active");
        btn.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle the clicked accordion
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  });
});
