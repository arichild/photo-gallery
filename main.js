const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector(".overlay");

btn = document.querySelector('button');

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", 'images/p' + i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.onclick = function (e) {
      const thisPicture = e.target;
      const srcPicture = thisPicture.getAttribute("src");

      displayedImage.setAttribute("src", srcPicture);
    };

    btn.onclick = function() {
        const getClass = btn.getAttribute('class')

        if (getClass === "dark") {
          btn.setAttribute("class", "light");
          btn.textContent = "light";
          overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        } else if (getClass === "light") {
          btn.setAttribute("class", "dark");
          btn.textContent = "dark";
          overlay.style.backgroundColor = "rgba(0,0,0,0)";
        }
    };
}