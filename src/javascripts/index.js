// Required by Webpack - do not touch
require.context("../", true, /\.(html|json|txt|dat)$/i);
require.context("../images/", true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i);
require.context("../stylesheets/", true, /\.(css|scss)$/i);

// JavaScript
//TODO
import { gallery } from "./gallery";

let featured_trail = document.querySelector(".card");
for (let t of gallery) {
  let trail_thumb = document.getElementById("t" + t.id);
  trail_thumb.innerHTML = `
    <img src="${t.url}">
    <h5 class="card-title">${t.title}</h5>
    <p class="card-text">${t.description}</p>

    `;

  trail_thumb.onclick = function() {
    selectTrail(t);
  };
}

// function selectTrail(t) {
//   featured_trail.innerHTML = `
//     <img src="${t.url}" style="float: left; margin-left:15px">
//     <h2>${t.title}</h2>
//     <p>${t.description}</p>
//     `;
// }
