document.addEventListener("DOMContentLoaded", function() {
  const Whatsapp = document.getElementById("Whatsapp");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("closeButton");
  const copyButton = document.getElementById("copyButton");

  // Check if the screen width is greater than 768px (desktop)
  if (window.innerWidth > 768) {
    Whatsapp.addEventListener("click", function() {
      popup.style.display = "block";
    });

    popup.addEventListener("click", function(event) {
      if (!popup.contains(event.target)) {
        popup.style.display = "none";
      }
    });

    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
    });

    copyButton.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent event from bubbling up
      const dummyTextArea = document.createElement("textarea");
      dummyTextArea.value = "https://wa.me/qr/D3TQJWS7SF2DL1"; // Replace with your link
      document.body.appendChild(dummyTextArea);
      dummyTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(dummyTextArea);

      copyButton.textContent = "Copied ✓";
      copyButton.classList.add("copied");
      setTimeout(function() {
        copyButton.textContent = "Copy Link";
        copyButton.classList.remove("copied");
      }, 2000); // Revert back to "Copy Link" after 2 seconds
    });
  } else {
    // On mobile screens, open the link directly
    Whatsapp.addEventListener("click", function() {
      window.location.href = "https://wa.me/qr/D3TQJWS7SF2DL1";
    });
  }
});
