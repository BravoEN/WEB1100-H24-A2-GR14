function leggTilTall() {
    console.log("hei")
    var tall1 = document.getElementById("tall1").value;
    var gaarMest = document.getElementById("gaarMest").value;
    var tall2 = document.getElementById("tall2").value;
    var gaarMinst = document.getElementById("gaarMinst").value;
    document.getElementById("insertTallstat").innerHTML += "<tr><td>" + tall1 + "</td><td>" + gaarMest + "</td><td>" + tall2 + "</td><td>" + gaarMinst + "</td></tr>";

    document.getElementById("tall1").value = "";
    document.getElementById("gaarMest").value = "";
    document.getElementById("tall2").value = "";
    document.getElementById("gaarMinst").value = "";
}

function spillEn() {
    var rekke = document.getElementById("rekker").value;
    var antallTall = document.getElementById("antallTall").value;
    var vinnertall = document.getElementById("vinnerTallet").value;
    var vinnersted = document.getElementById("vinnersted").value;
}
