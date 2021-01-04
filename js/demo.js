var self = document.getElementById("self")
self.onclick = function() {
    document.getElementById("selfintro").style.display = "block";
}

var introclose = document.getElementById("introclose")
introclose.onclick = function() {
    document.getElementById("selfintro").style.display = "none";
}