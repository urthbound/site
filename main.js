function get(url) {
     xmlHttp = new XMLHttpRequest();
     xmlHttp.open("GET", url , false);
     xmlHttp.send("null");
     return xmlHttp.response;
 }


 document.getElementById("footer").innerHTML = get("footer.html");
 document.getElementById("header").innerHTML = get("header.html");
