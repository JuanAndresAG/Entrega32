var teoria=function(){

     var c1=document.getElementById('cuadro1');
     var c2=document.getElementById('ocultar');
     c1.className="cuadro12";
     c2.className="ocultar1";

}
var ocultar=function (){

var c3=document.getElementById('cuadro1');
var c4=document.getElementById('ocultar');
var c7=document.getElementById('cuadro2');
c7.className="cuadro2";
c3.className="cuadro1";
c4.className="cuadro1";


}
var operaciones=function(){
	var c5=document.getElementById('cuadro2');
	var c6=document.getElementById('ocultar');
   

	c5.className="cuadro22";
	c6.className="ocultar1";
}
var solucion=function(){
	var n1=document.getElementById('o1').value;
	var n2=document.getElementById('o2').value;
	var n3=document.getElementById('o3').value;

	var suma=parseInt(n1)+parseInt(n2)-parseInt(n3);
	alert('el resultado de la operacion es:'+suma);
	
}
