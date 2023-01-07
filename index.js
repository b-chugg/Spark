var contentElement = document.getElementById('content');
var progressBarElement = document.getElementById('progress-bar');

progressBarElement.style.width = contentElement.innerHTML;

//Variables, ID's created
var conduitType = document.getElementById("conduitType");
var conduitSize = document.getElementById("conduitSize");
var wireType = document.getElementById("wireType");
var wireSize = document.getElementById("wireSize");
var wireNumber = document.getElementById("wireNumber");
var solve = document.getElementById("solve");
var content = document.getElementById("content");

//Populate drop down menu based on type of conduit.
function setConduitSizes(){
    var length = conduitSize.options.length
    for (let i = length - 1; i >= 0; i--){
        conduitSize.remove(i)
    }
    var sizes = conduitSizes[conduitType.value]
    for (let i = 0; i < sizes.length; i++){
        var option = document.createElement("option")
        option.text = sizes[i] + "\""
        option.value = sizes[i]
        conduitSize.add(option)
    }
}

conduitType.onchange = setConduitSizes

setConduitSizes()

//Solve for what percentage of code compliant space is used in conduit.
solve.onclick = function(){
    var conduitTypeVal = conduitType.value
    var conduitSizeVal = conduitSize.value
    var wireTypeVal = wireType.value
    var wireSizeVal = wireSize.value
    var wireNumberVal = wireNumber.value

    if (wireNumberVal > 3){
        wireNumberVal = 3
    }

    var conduitArea = conduitDimensions[conduitTypeVal][conduitSizeVal][wireNumberVal - 1]
    var wireArea = wireDimensions[wireTypeVal][wireSizeVal]
    var finalCalculation = (wireArea * wireNumber.value) / conduitArea * 100
    content.textContent = finalCalculation.toFixed(1)
}