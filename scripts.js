function tracker() {
  var x = parseInt(document.getElementById("one").value);
  var y = parseInt(document.getElementById("two").value);
  var z = parseInt(document.getElementById("three").value);
  var triangles = [x, y, z];
  // var response = document.getElementById("response");


  if (triangles[0] + triangles[1] <= triangles[2] || triangles[0] + triangles[2] <= triangles[1] || triangles[1] + triangles[2] <= triangles[0]) {
    document.getElementById("response").innerHTML = "A triangle can not be formed from these dimensions ";
  } else if (triangles[0] === triangles[1] && triangles[1] === triangles[2] && triangles[0] === triangles[2]) {
    // response.innerHTML = 'Equilateral triangle'
    document.getElementById("response").innerHTML = "Equilateral triangle.";

  } else if (triangles[0] === triangles[1] || triangles[0] === triangles[2] || triangles[1] === triangles[2]) {
    // response.innerHTML = 'Isosceles triangle'
    document.getElementById("response").innerHTML = "Isosceles triangle.";
  } else if (triangles[0] + triangles[1] > triangles[2] || triangles[1] + triangles[2] > triangles[0] || triangles[0] + triangles[2] > triangles[1]) {
    // response.innerHTML = 'Scelene triangle'
    document.getElementById("response").innerHTML = "Scalene triangle.";
  } else {
    response.innerHTML = 'not a triangle';
  }
}
