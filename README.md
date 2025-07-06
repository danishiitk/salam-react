#Salam react
1 - Basic index html, index css, App.js setup
2 - Remote: Setup github > create repo
Local: git init, git add, git commit, git push setup/copy remote url from github and setup

3 - npm init --> this will generate package.json, package-lock.json
4 - .gitignore --> Add /node_modules etc for git to ignore them

5 - We choose parcel as bundler,
so install it as: npm install -D parcel
install react and react-dom: npm i react and npm i react-dom

6 - To run the app: npx parcel index.html (starting point of our app)

7 - Set up the start and build scripts in package.json to perform these ops easily

Notes:
npm ---> for managing packages
npx ---> for executing/running packages/modules

The purpose of JS is dom manipulation.
Libraries of js contain methods for easy dom manipulation, like React.createElement(), ReactDOM.render();
The flow is: js (for dom manipulation using code) --> React core (react library for easy dom manipulation ) --> JSX (make writing the code developer friendly, make it similar to writing HTML, so we don't have to use React.createElement(), etc)

JSX code is transpiled to React.createElement... by babel before it is sent to the browser for execution by the js engine.
JSX behind the scenes is React.createElement()

UNDERSTAND THE DIFFERENCE IN CODE WITH ONLY JS OR REACT CORE OR REACT JSX.

//
import { IMAGE_CDN_URL } from "../utils/constants";

//Restaurant Card code with JSX
const RestaurantCard = ({
resName,
deliveryTime,
cuisines,
cloudinaryImageId,
avgRating,
}) => {
return (

<div className="res-card">
<img
className="res-img"
alt="Res Image"
src={IMAGE_CDN_URL + cloudinaryImageId}
/>
<h2>{resName}</h2>
<span className="rest-info-container">
<h3>{avgRating} stars</h3>
<h3>{deliveryTime} minutes</h3>
<h3>{cuisines.join(", ")}</h3>
</span>
</div>
);
};
export default RestaurantCard;

//React core code of Restaurant Card without JSX
import { IMAGE_CDN_URL } from "../utils/constants";
function RestaurantCard(props) {
return React.createElement(
"div",
{ className: "res-card" },
React.createElement("img", {
className: "res-img",
alt: "Res Image",
src: IMAGE_CDN_URL + props.cloudinaryImageId,
}),
React.createElement("h2", null, props.resName),
React.createElement(
"span",
{ className: "rest-info-container" },
React.createElement("h3", null, props.avgRating + " stars"),
React.createElement("h3", null, props.deliveryTime + " minutes"),
React.createElement("h3", null, props.cuisines.join(", "))
)
);
}
export default RestaurantCard;

//Plain JS code of Restaurant Card
import { IMAGE_CDN_URL } from "../utils/constants";
// Creates a restaurant card DOM element without React
function createRestaurantCard({ resName, deliveryTime, cuisines, cloudinaryImageId, avgRating }) {
const card = document.createElement("div");
card.className = "res-card";

const img = document.createElement("img");
img.className = "res-img";
img.alt = "Res Image";
img.src = IMAGE_CDN_URL + cloudinaryImageId;
card.appendChild(img);

const name = document.createElement("h2");
name.textContent = resName;
card.appendChild(name);

const infoContainer = document.createElement("span");
infoContainer.className = "rest-info-container";

const rating = document.createElement("h3");
rating.textContent = avgRating + " stars";
infoContainer.appendChild(rating);

const time = document.createElement("h3");
time.textContent = deliveryTime + " minutes";
infoContainer.appendChild(time);

const cuisine = document.createElement("h3");
cuisine.textContent = cuisines.join(", ");
infoContainer.appendChild(cuisine);

card.appendChild(infoContainer);

return card;
}

export default createRestaurantCard;
