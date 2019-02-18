function tracker() {
  var x = parseInt(document.getElementById("one").value);
  var y = parseInt(document.getElementById("two").value);
  var z = parseInt(document.getElementById("three").value);
  var triangles = ["Equilateral triangle", "Isosceles triangle", "Scalene triangle"];
  var response = document.getElementById('response');


  if (x + y > z && z + x = y && z + y = x) {
    if (x == y && y == z) {
      response.innerHTML = 'Equilateral triangle'
    } else if (x == y || y == z || z == x) {
      response.innerHTML = 'Isosceles triangle'
    } else {
      response.innerHTML = 'Scelene triangle'
    }
  } else {
    response.innerHTML = 'not a triangle'
  }
}
