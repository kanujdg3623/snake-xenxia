var id, posx=10, posy=10, key,queue=[];
var Y=$("#bait").position().top;
var X=$("#bait").position().left;
var score=0;
prevkey=null;
$("#up").click(function(){
	clearInterval(id);
	id = setInterval(
			function(){
				if (posy == 0 || bite() ) {
				  gameOver();
				  clearInterval(id);
				} 
				else if((posx+12)>X && (posx+12)<(X+25) && (posy+12)>Y && (posy+12)<(Y+25)){
					generateRandom();
					extend();
					}
				else
				{
				  posy--; 
				  $(".snake:eq(0)").css({top: posy}); 
				  motion();
				}
			}, 1);
});
$("#down").click(function(){
	clearInterval(id);
	id = setInterval(
			function(){
				if (posy == 475 || bite() ) {
				  gameOver();
				  clearInterval(id);
				} 
				else if((posx+12)>X && (posx+12)<(X+25) && (posy+12)>Y && (posy+12)<(Y+25)){
					generateRandom();
					extend();
					}
				else
				{
				  posy++; 
				  $(".snake:eq(0)").css({top: posy}); 
				  motion();
				}
			}, 1);
});
$("#left").click(function(){
	clearInterval(id);
	id = setInterval(
			function(){
				if (posx == 0 || bite() ) {
				  gameOver();
				  clearInterval(id);
				} 
				else if((posx+12)>X && (posx+12)<(X+25) && (posy+12)>Y && (posy+12)<(Y+25)){
					generateRandom();
					extend();
					}
				else
				{
				  posx--; 
				  $(".snake:eq(0)").css({left: posx}); 
					motion();
				}
			}, 1);
});
$("#right").click(function(){
	clearInterval(id);
	id = setInterval(
			function(){
				if (posx == 725 || bite() ) {
				  clearInterval(id);
				  gameOver();
				} 
				else if((posx+12)>X && (posx+12)<(X+25) && (posy+12)>Y && (posy+12)<(Y+25)){
					generateRandom();
					extend();
				}
				else
				{
				  posx++; 
				  $(".snake:eq(0)").css({left: posx}); 
				  motion();
				  }
			}, 1);
});
$(window).keypress(function(e) {
       key = e.which;
	   clearInterval(id);
	   if(key==100) //right
	   {
		   id = setInterval(
			function(){
				if (posx == 725 || bite() ) {
				  clearInterval(id);
				  gameOver();
				} 
				else if((posx+12)>X && (posx+12)<(X+25) && (posy+12)>Y && (posy+12)<(Y+25)){
					generateRandom();
					extend();
				}
				else
				{
				  posx++; 
				  $(".snake:eq(0)").css({left: posx}); 
				  motion();
				  }
			}, 1);
		}
		if(key==97) //left
	   {
		   id = setInterval(
			function(){
				if (posx == 0 || bite() ) {
				  gameOver();
				  clearInterval(id);
				} 
				else if((posx+12)>X && (posx+12)<(X+25) && (posy+12)>Y && (posy+12)<(Y+25)){
					generateRandom();
					extend();
					}
				else
				{
				  posx--; 
				  $(".snake:eq(0)").css({left: posx}); 
					motion();
				}
			}, 1);
		}
		if(key==115) //down
	   {
		   id = setInterval(
			function(){
				if (posy == 575 || bite() ) {
				  gameOver();
				  clearInterval(id);
				} 
				else if((posx+12)>X && (posx+12)<(X+25) && (posy+12)>Y && (posy+12)<(Y+25)){
					generateRandom();
					extend();
					}
				else
				{
				  posy++; 
				  $(".snake:eq(0)").css({top: posy}); 
				  motion();
				}
			}, 1);
		}
		if(key==119) //up
	   {
		   id = setInterval(
			function(){
				if (posy == 0 || bite() ) {
				  gameOver();
				  clearInterval(id);
				} 
				else if((posx+12)>X && (posx+12)<(X+25) && (posy+12)>Y && (posy+12)<(Y+25)){
					generateRandom();
					extend();
					}
				else
				{
				  posy--; 
				  $(".snake:eq(0)").css({top: posy}); 
				  motion();
				}
			}, 1);
		}
 });
 
 function generateRandom(){
		X=Math.floor((Math.random() * 700) + 25);
		Y=Math.floor((Math.random() * 450) + 25);
		$("#bait").css({top:Y,left:X});
		score+=100;
		$("h1:last").text(score);
 }
 
 function extend(){
	$("#container").append("<div class=\"snake\"></div>");
	$(".snake:last").css({position:"absolute",top: posy, left:posx});
 }
 
 function motion(){
	if($(".snake").length>1) queue.push([posx,posy]);
	for(var i=1;i<$(".snake").length;i++)
	{
		$(".snake:eq("+i+")").css({top: queue[(i-1)*25][1],left: queue[(i-1)*25][0]});
	}
	if(queue.length>=(25*($(".snake").length-1)+1)) {
			queue.shift(); }
 }
 function bite()
 {
	 for(var i=1;i<($(".snake").length-2);i++)
	 {
		 if(Math.abs($(".snake:eq(0)").position().left-$(".snake:eq("+i+")").position().left)<25 && Math.abs($(".snake:eq(0)").position().top-$(".snake:eq("+i+")").position().top)<25)
		 { console.log(i);return true;}
	 }
	 return false;
 }
 function gameOver(){
	 alert("your score is "+$("#scoreboard h1").text());
	 while($(".snake:eq(1)").length){$(".snake:eq(1)").remove();}
	 $("#scoreboard h1").text(0);
	 posx=10; posy=10;queue=[];
	 score=0;
	 $(".snake:eq(0)").css({left: posx,top: posy}); 
 }