const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("close").addEventListener('click', () => {
  window.close();
});