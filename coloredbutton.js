

var color = 'purple';

document.querySelector(".left").computedStyleMap.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

document.querySelector(".right").computedStyleMap.backgroundColor = color;
document.querySelector(".right.color-value").innerHTML = color;

function headingColor() {
    color ="blue";
    document.querySelector('.title').computedStyleMap.color = color;
    
}


document.querySelector(".right").computedStyleMap.backgoundColor = color;
document.querySelector(".right.color-value").innerHTML = color;
headingColor();