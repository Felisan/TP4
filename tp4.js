var arrIni= prompt("¡Hola! por favor ingresá tres palabras. Separá cada palabra con una coma.");
arrIni= arrIni.split(",");
var arrfinal= [];
for (var i =0; i < arrIni.length; ++i) {
	arrfinal.push(arrIni[i].match(/[aeiou]/gi).length);

}
console.log (arrfinal);