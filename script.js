function showForm(formId) {
    // Hide all forms
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });

    // Show the selected form
    document.getElementById(formId).style.display = 'flex';
}



function calculateFlatTrayWeight() {
    var length = parseFloat(document.getElementById("length").value) / 1000;
    var width = parseFloat(document.getElementById("width").value) / 1000;
    var height = parseFloat(document.getElementById("height").value) / 1000;
    var thickness = parseFloat(document.getElementById("thickness").value);
    var sidePlateThickness = parseFloat(document.getElementById("sidePlateThickness").value);

    var weight = ((length * width) + (length * (2 * height)) + (width * height)) * thickness * 7.85;
    var wt2 = (0.14 * length + 0.07 * width) * thickness * 7.85;
    var flattotalWeight = weight + wt2;

    var flatTrayWeightLabel = document.getElementById("flatTrayWeightLabel");
    flatTrayWeightLabel.innerHTML = "<div class='result-label'>Flat Tray Weight:</div> " + flattotalWeight.toFixed(2) + " kg";

    // Calculate side plate weight
    var flatTrayLength = length * 0.92;
    var triangleHeight = 0.4;

    var triangleArea = 0.5 * flatTrayLength * triangleHeight;
    var triangleWeight = 2 * (triangleArea * sidePlateThickness * 7.85);
    var platerect = 2 * (flatTrayLength * 0.2 * sidePlateThickness * 7.850);
    var totalside = platerect + triangleWeight;

    var sidePlateWeightLabel = document.getElementById("sidePlateWeightLabel");
    sidePlateWeightLabel.innerHTML = "<div class='result-label'>Side Plate Weight:</div> " + totalside.toFixed(2) + " kg";

    // Calculate mortar mounting plate and ribs weight
    var sidePlateWeight = totalside;
    var ribsWeight = 0.8 * sidePlateWeight;
    var mortarPlateWeight = 30;
    var mortarPlateRibsWeight = ribsWeight + mortarPlateWeight;
    var mortarPlateRibsWeightLabel = document.getElementById("mortarPlateRibsWeightLabel");
    mortarPlateRibsWeightLabel.innerHTML = "<div class='result-label'>Mortar Plate and Ribs Weight:</div> " + mortarPlateRibsWeight.toFixed(2) + " kg";

    // Calculate total weight
    var totalWeight = flattotalWeight + triangleWeight + mortarPlateRibsWeight;

    var totalWeightLabel = document.getElementById("totalWeightLabel");
    totalWeightLabel.innerHTML = "<div class='result-label'>Total Weight:</div> " + totalWeight.toFixed(2) + " kg";

    // Update user-entered values in the image (converted to millimeters)
    document.getElementById("lengthValue").textContent = length.toFixed(2);
    document.getElementById("widthValue").textContent = width.toFixed(2);
    document.getElementById("heightValue").textContent = height.toFixed(2);
    document.getElementById("lengthValue").textContent = length.toFixed(2);
    document.getElementById("widthValue").textContent = width.toFixed(2);
    document.getElementById("heightValue").textContent = height.toFixed(2);
}

function calculateRoundTrayWeight() {
    var diameter = parseFloat(document.getElementById('diameter').value);
    var thickness = parseFloat(document.getElementById('thicknessRound').value);
    var length = parseFloat(document.getElementById('lengthRound').value) / 1000; // Convert to meters

    var finalDiameter = (diameter - thickness) * (3.14159265359 / 1000); // Calculate final diameter

    var weight1 = finalDiameter * length * thickness * 7.85; // Calculate weight
    var weight2 = finalDiameter * 0.25 * thickness * 7.85; // Calculate weight
    var weight3 = finalDiameter * 0.2 * thickness * 7.85;
    // var weight4 = (diameter+50 )-thickness * length *thickness*7.85;

    var weight = weight1 + weight2 + weight3;

    var weight4 = (diameter + 50) - thickness * length * thickness * 7.850;

    var roundTrayWeightLabel = document.getElementById("roundTrayWeightLabel");
    roundTrayWeightLabel.innerHTML = "<div class='result-label'>Round Tray Weight:</div> " + weight.toFixed(2) + " kg";

    var sidePlateLength = length * 0.8;
    var triangleHeight = 0.6;
    var triangleArea = 0.5 * sidePlateLength * triangleHeight;
    var roundSidePlateThickness = parseFloat(document.getElementById("sidePlateThicknessRound").value);
    var roundSidePlateWeight = 2 * (triangleArea * roundSidePlateThickness * 7.85);

    var roundSidePlateWeightLabel = document.getElementById("roundSidePlateWeightLabel");
    roundSidePlateWeightLabel.innerHTML = "<div class='result-label'>Round Side Plate Weight:</div> " + roundSidePlateWeight.toFixed(2) + " kg";

    var diameter = parseFloat(document.getElementById('diameter').value) / 1000;
    var thickness = parseFloat(document.getElementById('thicknessRound').value);
    var length = parseFloat(document.getElementById('lengthRound').value) / 1000; // Convert to meters
    var clamps = parseInt(document.getElementById('clamps').value);

    // Calculate clamp weight
    var width = diameter * Math.PI;
    var oneClampWeight = width * 0.1 * thickness * 7.85;
    var clampWeight = oneClampWeight * clamps;
    var clampWeightLabel = document.getElementById("clampWeightLabel");
    clampWeightLabel.innerHTML = "<div class='result-label'>Clamp Weight:</div> " + clampWeight.toFixed(2) + " kg";

    // Calculate total weight
    var totalRoundTrayWeight = weight + roundSidePlateWeight + clampWeight;

    var totalRoundTrayWeightLabel = document.getElementById("totalRoundTrayWeightLabel");
    totalRoundTrayWeightLabel.innerHTML = "<div class='result-label'>Total Round Tray Weight:</div> " + totalRoundTrayWeight.toFixed(2) + " kg";

    totalRoundTrayWeightLabel.style.display = 'block';

    var roundTrayResult = document.getElementById("roundTrayResult");
    roundTrayResult.style.display = 'block';

    var roundSidePlateWeightLabel = document.getElementById("roundSidePlateWeightLabel");
    roundSidePlateWeightLabel.style.display = 'block';

    var clampWeightLabel = document.getElementById("clampWeightLabel");
    clampWeightLabel.style.display = 'block';

    var roundTrayWeightLabel = document.getElementById("roundTrayWeightLabel");
    roundTrayWeightLabel.style.display = 'block';
}

function calculateHopperVolume() {
    var length1 = parseFloat(document.getElementById("length1").value);
    var width1 = parseFloat(document.getElementById("width1").value);
    var height1 = parseFloat(document.getElementById("height1").value);
    var length2 = parseFloat(document.getElementById("length2").value);
    var width2 = parseFloat(document.getElementById("width2").value);
    var height2 = parseFloat(document.getElementById("height2").value);
    // var height3 = parseFloat(document.getElementById("height3").value);
    // var density = parseFloat(document.getElementById("density").value);
    var sideThickness = parseFloat(document.getElementById("sideThickness").value);
    var density = 7.850;

    var baseLength = (length1 - length2) / 2;

    // Given angle in degrees
    var angle60Degrees = 60;

    // Convert angle to radians
    var angle60Radians = (angle60Degrees * Math.PI) / 180;

    // Calculate the height using the tangent of the angle
    var height3 = baseLength * Math.tan(angle60Radians);

    // Calculate inner volume1
    var innerVolume1CubicMM = length1 * width1 * height1;
    var innerVolume1Liters = innerVolume1CubicMM * 1e-6;

    // Calculate inner volume2
    var innerVolume2CubicMM = length2 * width2 * height2;
    var innerVolume2Liters = innerVolume2CubicMM * 1e-6;

    // Calculate inner volume3
    var innerVolume3CubicMM = (length1 * width1 * height3) - width1 * (length1 - length2 / 2) * height3;
    var innerVolume3Liters = innerVolume3CubicMM * 1e-6;

    // Calculate total inner volume
    var totalInnerVolumeLiters = innerVolume1Liters + innerVolume2Liters + innerVolume3Liters;

    var totalvalumeLiters = innerVolume1Liters + innerVolume3Liters;

    var outerlength1 = length1 + 2 + sideThickness;
    var outerwidth1 = width1 + 2 + sideThickness;

    var outerlength2 = length2 + 2 + sideThickness;
    var outerwidth2 = width2 + 2 + sideThickness;


    // Calculate outer volume1
    var outerVolume1CubicMM = outerlength1 * outerwidth1 * height1;
    var outerVolume1Liters = outerVolume1CubicMM * 1e-6;

    // Calculate outer volume2
    var outerVolume2CubicMM = outerlength2 * outerwidth2 * height2;
    var outerVolume2Liters = outerVolume2CubicMM * 1e-6;

    // Calculate outer volume3
    var outerVolume3CubicMM = (outerlength1 * outerwidth1 * height3) - outerwidth1 * (outerlength1 - outerlength2 / 2) * height3;
    var outerVolume3Liters = outerVolume3CubicMM * 1e-6;

    // Calculate total outer volume
    var totalouterVolumeLiters = outerVolume1Liters + outerVolume2Liters + outerVolume3Liters;

    // Calculate difference in volumes
    var differenceVolumeLiters = totalouterVolumeLiters - totalInnerVolumeLiters;

    // Calculate weight in kilograms
    var hopperWeightKg = differenceVolumeLiters * density;

    var frame = [((length1 + 100) * 4) + ((width1 + 100) * 4) + (4000)] * 0.0042452631578147;

    // // Display the results
    // var outerVolumeLabel = document.getElementById("outerVolumeLabel");
    // outerVolumeLabel.innerHTML = "<div class='result-label'>Outer Volume:</div> " + totalouterVolumeLiters.toFixed(2) + " liters";

    var innerVolumeLabel = document.getElementById("innerVolumeLabel");
    innerVolumeLabel.innerHTML = "<div class='result-label'>Inner Volume:</div> " + totalvalumeLiters.toFixed(2) + " liters";

    // var differenceVolumeLabel = document.getElementById("differenceVolumeLabel");
    // differenceVolumeLabel.innerHTML = "<div class='result-label'>Difference in Volumes:</div> " + differenceVolumeLiters.toFixed(2) + " liters";

    var weightLabel = document.getElementById("weightLabel");
    weightLabel.innerHTML = "<div class='result-label'>Weight of Hopper (kg):</div> " + hopperWeightKg.toFixed(2) + " kg";

    var frameLabel = document.getElementById("frameLabel");
    frameLabel.innerHTML = "<div class='result-label'>Weight of Stand (kg):</div> " + frame.toFixed(2) + " kg";

    var heightofhopperLabel = document.getElementById("heightofhopperLabel");
    heightofhopperLabel.innerHTML = "<div class='result-label'>Slop of Height (H1)(mm) 60%:</div> " + height3.toFixed(2) + " mm";

    // Display the result container
    document.getElementById("hopperResult").style.display = 'block';
}


function calculateFRPWeight() {
    var numberOfHangers = parseInt(document.getElementById('numberOfHangers').value);
    var frpWeight = numberOfHangers * 1300 / 1000; // Convert grams to kilograms

    var frpWeightLebel = document.getElementById("frpWeightLebel");
    frpWeightLebel.innerHTML = "<div class='result-label'>Weight of FRP (kg):</div> " + frpWeight.toFixed(2) + " kg";

    document.getElementById('frpResult').style.display = 'block';
}

function calculateFeederWeight() {
    var length = document.getElementById('feederLength').value / 1000; // Convert mm to meters
    var widthmm = document.getElementById('feederWidth').value;
    var width = document.getElementById('feederWidth').value / 1000;
    var heightmm = document.getElementById('feederHeight').value;
    var height = document.getElementById('feederHeight').value / 1000;
    var thickness = document.getElementById('feederThickness').value / 1000;
    var density = document.getElementById('feederdensity').value;
    var velocity = document.getElementById('feedervelocity').value;
    var capacity = document.getElementById('feedercapacity').value;

    var finlength = (length + height);
    var finwidth = (width + (2 * height));
    var dob = (height * 0.7);

    var trayweight = ((finlength * finwidth * thickness * 7850) + (finlength * finwidth * thickness * 7850) * 0.85);
    var trayheight = ((capacity * 100000000) / (density * velocity * widthmm * 6));
    var traywidth = ((capacity * 100000000) / (density * velocity * heightmm * 6));
    var traycapacity = ((((width * dob * density * velocity) * 60) / 1000) * 0.8);

    document.getElementById('result').innerHTML = 'Approximate Weight: ' + trayweight.toFixed(2) + ' kg';

    // Display tray results
    var trayResults = document.getElementById('trayResults');
    trayResults.innerHTML =
        'Tray height: ' + trayheight.toFixed(2) + ' mm<br>' +
        'Tray Width: ' + traywidth.toFixed(2) + ' mm<br>' +
        'Tray Capacity: ' + traycapacity.toFixed(2) + ' kg';

    // Check selected feeder based on tray weight and tray capacity
    var selectedFeeders = [];

    if (trayweight >= 0 && trayweight <= 2 && capacity >= 0 && capacity <= 1) {
        selectedFeeders.push('SV0C');
    }
    if (trayweight >= 0 && trayweight <= 4 && capacity >= 0 && capacity <= 4) {
        selectedFeeders.push('SV01');
    }
    if (trayweight >= 0 && trayweight <= 8 && capacity >= 0 && capacity <= 6) {
        selectedFeeders.push('SV02');
    }
    if (trayweight >= 0 && trayweight <= 11 && capacity >= 0 && capacity <= 6) {
        selectedFeeders.push('SV50');
    }
    if (trayweight >= 0 && trayweight <= 20 && capacity >= 0 && capacity <= 6) {
        selectedFeeders.push('SVSF200');
    }
    if (trayweight >= 0 && trayweight <= 22 && capacity >= 0 && capacity <= 8) {
        selectedFeeders.push('SV90');
    }
    if (trayweight >= 0 && trayweight <= 29 && capacity >= 0 && capacity <= 8) {
        selectedFeeders.push('SV90WITH SIDE PLATE');
    }
    if (trayweight >= 0 && trayweight <= 25 && capacity >= 0 && capacity <= 10) {
        selectedFeeders.push('SV100');
    }
    if (trayweight >= 0 && trayweight <= 38 && traycapacity >= 0 && traycapacity <= 10) {
        selectedFeeders.push('SV100WITH SIDE PLATE');
    }
    if (trayweight >= 0 && trayweight <= 70 && traycapacity >= 0 && traycapacity <= 10) {
        selectedFeeders.push('SV200');
    }

    // Display selected feeders
    if (selectedFeeders.length > 0) {
        trayResults.innerHTML += '<br>Selected Feeders:<br> ' + selectedFeeders.join(',<br> ');
    } else {
        trayResults.innerHTML += '<br>No Matching Feeder';
    }
}