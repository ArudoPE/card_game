let tilesShowed = 0;
function showTile(tileName) {
    console.log('Initial tile showed: ' + tilesShowed);
    console.log(tileName);
        if(document.getElementById(tileName).style.visibility === "hidden")
        {
            document.getElementById(tileName).style.visibility = "visible";
        } else {
            //this part hides the tile
            document.getElementById(tileName).style.visibility = "hidden";
            tilesShowed++;
        }
    console.log(tilesShowed);
}