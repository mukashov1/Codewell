function myFunction(x) {
    if (x.matches) {
        console.log("1");
      document.getElementById('heroimg').src = "Assets/Hero\ Image\ \(Tablet\ View\).png";
    }

    else {
        console.log("wdwdw");
        document.getElementById('heroimg').src = "Assets/Hero\ Image\ \(Desktop\ View\).png"
    }
}

var x = window.matchMedia("(max-width: 987px)");
myFunction(x);
x.addListener(myFunction) 


function mobilemenu() {
    let display = getComputedStyle(document.getElementsByClassName('nav2')[0]).getPropertyValue('display');
    if (display == "flex") {
        document.getElementsByClassName('nav2')[0].style.setProperty('display' , 'none');
        console.log("if")
    } else {
        document.getElementsByClassName('nav2')[0].style.setProperty('display' , 'flex');
        console.log("else")
    }
}