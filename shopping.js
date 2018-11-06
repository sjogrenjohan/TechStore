function initSite() {
    document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";
}






function clickME() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("clicks").innerHTML = " " + localStorage.clickcount + "";
    } 
}