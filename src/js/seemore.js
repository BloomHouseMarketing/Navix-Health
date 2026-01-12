document.addEventListener("DOMContentLoaded", function () {

  const WORD_LIMIT = 18; // 👈 ONLY THIS

  document.querySelectorAll(".subsection-nxc").forEach(card => {

    const paragraphs = card.querySelectorAll("p");
    const button = card.querySelector(".see-more-btn");
    if (!button) return;

    // save original content
    paragraphs.forEach(p => {
      p.dataset.original = p.innerHTML;
    });

    function collapse() {
      let count = 0;
      let limitReached = false;

      paragraphs.forEach(p => {
        p.innerHTML = p.dataset.original;
        p.classList.remove("is-hidden");

        if (limitReached) {
          p.classList.add("is-hidden");
          return;
        }

        const words = p.innerText.trim().split(/\s+/);

        if (count + words.length <= WORD_LIMIT) {
          count += words.length;
        } else {
          const visible = words.slice(0, WORD_LIMIT - count).join(" ");
          const hidden = words.slice(WORD_LIMIT - count).join(" ");

          p.innerHTML = `
            ${visible}
            <span class="dots">...</span>
            <span class="is-hidden more-text">${hidden}</span>
          `;
          count = WORD_LIMIT;
          limitReached = true;
        }
      });
    }

    collapse();

    let expanded = false;

    button.addEventListener("click", function () {
      expanded = !expanded;

      if (expanded) {
        paragraphs.forEach(p => {
          p.innerHTML = p.dataset.original;
          p.classList.remove("is-hidden");
        });
        button.innerText = "See less";
      } else {
        collapse();
        button.innerText = "See more";
      }
    });

  });

});
