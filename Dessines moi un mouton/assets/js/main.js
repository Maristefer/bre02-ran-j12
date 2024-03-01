
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;

    // le code de l'étape 1 se passe ici
    let divs = document.querySelectorAll("header div");
    
    //console.log(divs); Affiche sous forme de tablo les div du header
    
    for(let i = 0; i < divs.length; i++) {
        
        //let div = divs[i];
        divs[i].style.background = colors[i];
    }
}

window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    let divs = document.querySelectorAll("header div");
    
    for(let i = 0; i < divs.length; i++) {
    
divs[i].addEventListener("click", selectColor);//console.log(getSelectedColor());

    }
//La méthode forEach()permet d'exécuter une fonction donnée sur chaque élément du tableau
      /*let headerDivs = document.querySelectorAll('header > div');
    headerDivs.forEach(function(div){
      div.addEventListener("click", selectColor);
    });*/
    
    // le code de l'étape 3 se passe ici
let mainDivs = document.querySelectorAll('main > div > div');
    for(let i = 0; i < mainDivs.length; i++) {
        let div = mainDivs[i];
        div.addEventListener('click', function(event) {
            let element = event.target;
            console.log(element);
            let color = getSelectedColor();
            if (color !== null) {
                if (event.target.style.backgroundColor) {
                    event.target.style.backgroundColor = "";
                } else {
                    event.target.style.backgroundColor = color;
                }
            }
        });
    }
});

/*let mainDivs = document.querySelectorAll("main div");
    
    mainDivs.forEach(function (div){
        div.addEventListener("click", function(event) {
    
    let color = getSelectedColor();
    
//if(color !== null)  
if(color)/*if(color !== null) {
        if(event.target.style.backgroundColor) {
        event.target.style.backgroundColor = '';
        
    }else{
        
        event.target.style.backgroundColor = color;
    }
    }
        

        });
        });*/