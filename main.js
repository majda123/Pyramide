var rows;
rows= prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

if ( rows < 25 )
{
for(var i=1; i<=rows; i++)
{
 for(var k=1; k<=( rows-i ); k++)
  { document.write("&nbsp;");
}
 for(var j=1; j<=i; j++)
  {
     document.write("* ");
   }
   document.write("<br/>");
  }
}
else
document.write ("le nombre que vous avez entré est superieur à 25 ") ;
