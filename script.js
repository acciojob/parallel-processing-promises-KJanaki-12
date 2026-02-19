//your JS code here. If required.
const loadingDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const outputDiv = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(imageObj) {
	return new Promise = ((resolve, reject)=>{
	const img = new Image();
    img.src = imageObj.url;
    img.onload = () => resolve(img);
    img.onerror = () => reject("Failed to load image: " + url);
	});
}

function downloadImages() {
    loadingDiv.style.display = "block";
    errorDiv.textContent = "";
    outputDiv.innerHTML = "";

    const promises = images.map(url => downloadImage(url));

    Promise.all(promises)
      .then(images => {
        loadingDiv.style.display = "none";
        images.forEach(img => {
          outputDiv.appendChild(img);
        });
      })
      .catch(error => {
        loadingDiv.style.display = "none";
        errorDiv.textContent = error;
      });
  }

btn.addEventListener("click", downloadImages());
