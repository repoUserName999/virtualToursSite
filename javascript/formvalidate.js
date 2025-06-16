function enableCreateUser() {
  if (document.getElementById("videocheck").checked) {
    document.getElementById("video-link").classList.remove('disable_section')
  } else {
    document.getElementById("video-link").classList.add('disable_section')
  }
}

function validateForm() {
  let email = document.getElementById('email').value.trim();
  const youtubeUrl = document.getElementById('link').value.trim();
  const errorElement = document.getElementById('error');
  const youtubeChecked = document.getElementById('videocheck').checked;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/;
  let errorMessages = [];
  if (!emailRegex.test(email)) {
    errorMessages.push("Please enter a valid email address.");
  }
  if (youtubeChecked && !youtubeRegex.test(youtubeUrl)) {
    errorMessages.push("Please enter a valid youtube URL.")
  }
  if (errorMessages.length > 0) {
    errorElement.textContent = errorMessages.join(" ");
    return false;
  } else {
    errorElement.textContent = "";
    alert("Thanks for your submission! You will be directed briefly to confirm you're not a robot!");
    return true;
  }
  
}
