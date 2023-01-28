Message = "!Polecamy kategorię przerażone psy!";
Size = 90;
Pos=Size;
Speed = 0.5;

function Banner() 
{
   Spaces = "";
   for (count=0; count<Pos; count++) 
      Spaces+= " ";
   if (Pos < 1) 
   {
      document.Banner.Bar.value = Message.substring(Math.abs(Pos), Message.length);
      if (Pos+Message.length < 1)
         {Pos = Size;}
   } 
   else 
      document.Banner.Bar.value = Spaces + Message;
   Pos-=Speed;
   setTimeout('Banner();', 15);
}