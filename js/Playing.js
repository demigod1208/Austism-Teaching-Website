     //set variable counter
            var counter = 0;
            //on window start start listening for input
            window.onload=function(){
                document.getElementById("nextPic").addEventListener('click', forwardPic);
                document.getElementById("backPic").addEventListener('click', reversePic);
                
                //the following is a test code for swipping and didnt really work
                //(' slides').swipe({
                //  swipe:function(event, direction, distance, duration, figerCount){
                //        switch(direction){
                //            case "left":
                //                reversePic();
                //                break;
                //            case "right":
                //                forwardPic();
                //                break;
                //        }
                //    }
                //})
            }
            
            //according to the input changes are made here
             function forwardPic() {
                 counter = counter+1;
                 
                 if (counter == 1){
                    document.getElementById("image").src="images/Play2.jpeg";
                     document.getElementById('nextText').innerHTML ="Think about other's feeling";
                    }
                 if (counter == 2){
                     document.getElementById("image").src="images/Play3.jpeg";
                     document.getElementById('nextText').innerHTML ="Don't leave people out"
                 }
                 if (counter == 3){
                     alert("This is the last slide");
                     counter = counter-1;
                 }
                 }
            function reversePic(){
                counter = counter-1;
                if (counter == 0){
                    document.getElementById("image").src="images/Play1.jpeg";
                    document.getElementById('nextText').innerHTML = "Share with others, sharing is caring";}
                
                if (counter == 1){
                    document.getElementById("image").src="images/Play2.jpeg";
                    document.getElementById('nextText').innerHTML = "Think about other's feeling";
                }
                if (counter == -1){
                    alert("This is the first slide");
                    counter = counter+1;
                }
            }