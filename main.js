const chaingcolor = () => {
    let random =Math.floor( Math.random() * 16777215);
    let randomCod = "#" + random.toString(16);

    document.body.style.backgroundColor = randomCod;

    document.getElementById("color").innerText = randomCod;

    navigator.clipboard.writeText(randomCod);  //if want to coppy this color with on click then need this line//
}

document.getElementById("btn").addEventListener(
    "click",
    chaingcolor
);

chaingcolor();

