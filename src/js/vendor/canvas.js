/**
 * Created by MBO3500 on 21/03/2016.
 */
window.onload = function()

{

    var canvas = document.getElementById('mon_canvas');

    if(!canvas)

    {

        alert("Impossible de récupérer le canvas");

        return;

    }


    var context = canvas.getContext('2d');

    if(!context)

    {

        alert("Impossible de récupérer le context du canvas");

        return;

    }

//On n'oublie pas de récupérer le canvas et son context.


    context.beginPath();//On démarre un nouveau tracé

    context.moveTo(0, 300);//On se déplace au coin inférieur gauche

    context.lineTo(150, 0);

    context.lineTo(300, 300);

    context.lineTo(0, 300);

    context.stroke();//On trace seulement les lignes.

    context.closePath();

    //C'est ici que l'on placera tout le code servant à nos dessins.

}
