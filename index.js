var conduitType = document.getElementById("conduitType");
var conduitSize = document.getElementById("conduitSize");
var wireType = document.getElementById("wireType");
var wireSize = document.getElementById("wireSize");
var wireNumber = document.getElementById("wireNumber");
var solve = document.getElementById("solve");
var content = document.getElementById("content")

solve.onclick = function(){
    var conduitTypeVal = conduitType.value
    var conduitSizeVal = conduitSize.value
    var wireTypeVal = wireType.value
    var wireSizeVal = wireSize.value
    var wireNumberVal = wireNumber.value

    if (wireNumberVal > 3){
        wireNumberVal = 3
    }
    console.log(dimensions[conduitTypeVal][conduitSizeVal][wireNumberVal - 1])
    content.textContent = dimensions[conduitTypeVal][conduitSizeVal][wireNumberVal - 1]
}