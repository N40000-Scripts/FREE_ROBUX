const btn = document.getElementById("robux-btn");
const screen = document.getElementById("fake-virus-screen");
const text = document.getElementById("virus-text");
const downloadBtn = document.getElementById("download-btn");

const messages = [
  "Installing... █▒▒▒▒▒▒▒▒▒▒ 10%",
  "Injecting Free_Robux.exe... ███▒▒▒▒▒▒ 30%",
  "Accessing package servers... █████▒▒▒ 60%",
  "Bypassing 2FA... ███████▒▒ 80%",
  "Initializing Data... █████████ 100%",
  "SUCCESS: FILES ARE READY!",
  "Activating file control...",
  "Sending IP to server...",
  "Task: Done",
  "Downloading files..."
];

btn.addEventListener("click", () => {
  screen.classList.remove("hidden");

  let i = 0;
  const interval = setInterval(() => {
    if (i < messages.length) {
      text.textContent += `\n${messages[i]}`;
      i++;
    } else {
      clearInterval(interval);
      downloadBtn.classList.remove("hidden");
    }
  }, 1000);
});

downloadBtn.addEventListener("click", () => {
  text.textContent += `\nFILES SUCCESSFULLY DOWNLOADED`;

  const a = document.createElement("a");
  a.href = "https://github.com/N40000-Scripts/FREE_ROBUX/raw/refs/heads/main/FREE_ROBUX.exe";
  a.download = "FREE_ROBUX.exe";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
