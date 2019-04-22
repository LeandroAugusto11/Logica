/**
 * @author Leandro Augusto
 */

 let i = 0, j = 1
 while (i < 11){
    i++
    document.write("<p> Tabuada do " + i + "</p>")
    while ( j < 11){
        j++
        document.write(i + " x " + j + " = " + (i*j) + "<br>")
    }
}