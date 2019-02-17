function tracker(){
  var x =parseInt(document.getElementByVal("one").value);
  var y =parseInt(document.getElementById("two").value);
  var z =parseInt(document.getElementById("three").value);
  var triangles = ["Equilateral triangle","Isosceles triangle","Scalene triangle"];
  var response = document.getElementById('alert');


  if(x+y>z && z+x=y && z+y=x){
    else if(x==y || y==z || z==x){
      response.innerHTML = "it's Equilateral triangle"
    }
    else if (x==y || y==z || z==x){
      responseinnerHTML = "it's Isosceles triangle"
    }
    else (){
      response.innerHTML = "it's Scelene triangle"
    }
  }
}
