console.log("script");

//creating string var
let myName = "Samantha";
console.log(myName);

//creating number var
let price = 99.75;
let myAge= 35;

//creating boolean var
let isProfessor=true;
let isStudent=false;

myName="Raheim";
console.log(myName.length);
console.log(24);
document.write("My Name Is: " + myName + ", I am " + myAge + "years old and the product price is "+price);

//template string
document.write(`
<p>Name: ${myName}</p>
<p>Age: ${myAge} </p>
<p>Price is ${price}</p>
`);

console.log(price);
console.log(isProfessor);

let num1=10;
let num2=20;

let sum = num1 + num2;
let division = num2/num1;
let mult = num1 * num2;

console.log(sum);
console.log(division);
console.log(mult);

let categoryName = "Documentaries"
let favorite =  "Dirty Money"
let othersViewed = "American Greed"

document.write(`
<h1> ${categoryName}</h1>
<p>Favorite Documentary: ${favorite} </p>
<p>Others Have Viewed: ${othersViewed}</p>
`);

categoryName = "Comedy"
favorite =  "Big Daddy"
othersViewed = "Anger Management"
let recommended = "My Big Fat Greek Wedding"

document.write(`
<h1> ${categoryName}</h1>
<p>Favorite Comedy: ${favorite} </p>
<p>Others Have Viewed: ${othersViewed}</p>
<p>Recommended: ${recommended}
`);

categoryName = "Horror"
favorite = "Halloween"
othersViewed = "Exorcist"
recommended = "It"

document.write(`
<h1> ${categoryName}</h1>
<p>Favorite Horror Movie: ${favorite} </p>
<p>Others Have Viewed: ${othersViewed}</p>
<p>Recommended: ${recommended}
`);

categoryName = "Drama"
favorite = "Wolf of Wall Street"
othersViewed = "Equalizer"
recommended = "Equalizer 2"
let highlyRated = "Equalizer 3"

document.write(`
<h1> ${categoryName}</h1>
<p>Favorite Drama Movie: ${favorite} </p>
<p>Others Have Viewed: ${othersViewed}</p>
<p>Recommended: ${recommended}
<p>Highly Rated: ${highlyRated}
`);

categoryName = "Romance"
favorite = "The Notebook"
othersViewed = "Titanic"
recommended = "Dirty Dancing"
highlyRated = "Love at First Sight"

console.log(categoryName,favorite,othersViewed,recommended);

document.write(`
<h1> ${categoryName}</h1>
<p>Favorite Drama Movie: ${favorite} </p>
<p>Others Have Viewed: ${othersViewed}</p>
<p>Recommended: ${recommended}
<p>Highly Rated: ${highlyRated}
`);






let object = {
    categoryName: 'Horror',
    chuckie: "Chuckie",
    jeepersCreeper: 'Jeepers Creepers',
    
}


console.log(object);
console.log(object.categoryName);