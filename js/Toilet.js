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
                    document.getElementById("image").src="images/Toilet2.jpeg";
                     document.getElementById('nextText').innerHTML ="Step 2: Walk to toilet (run only when desperate)";
                    }
                 if (counter == 2){
                     document.getElementById("image").src="images/Toilet3.jpeg";
                     document.getElementById('nextText').innerHTML ="Step 3: Use the toilet"
                 }
                 if (counter == 3){
                     document.getElementById("image").src="images/Toilet4.jpeg";
                     document.getElementById('nextText').innerHTML ="Step 4: Return back to the classroom you came from"
                 }
                 if (counter == 4){
                     alert("This is the last slide");
                     counter = counter-1;
                 }
                 }
            function reversePic(){
                counter = counter-1;
                if (counter == 0){
                    document.getElementById("image").src="images/Toilet1.jpg";
                    document.getElementById('nextText').innerHTML = "Step 1: Raise your hand (just leave class room if desperate)";}
                
                if (counter == 1){
                    document.getElementById("image").src="images/Toilet2.jpeg";
                    document.getElementById('nextText').innerHTML = "Step 2: Walk to toilet (run only when desperate)";
                }
                if (counter == 2){
                    document.getElementById("image").src="images/Toilet3.jpeg";
                    document.getElementById('nextText').innerHTML = "Step 3: Use the toilet";
                }
                if (counter == -1){
                    alert("This is the first slide");
                    counter = counter+1;
                }
            }