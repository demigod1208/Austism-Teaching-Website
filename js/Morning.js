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
                    document.getElementById("image").src="images/Morning2.jpg";
                     document.getElementById('nextText').innerHTML ="Step 2: Take a shower (Check showering tab to see the steps)";
                    }
                 if (counter == 2){
                     document.getElementById("image").src="images/Morning3.jpg";
                     document.getElementById('nextText').innerHTML ="Step 3: Get dressed"
                 }
                 if (counter == 3){
                     document.getElementById("image").src="images/Morning4.jpg";
                     document.getElementById('nextText').innerHTML ="Step 4: Eat Breakfast"
                 }
                 if (counter == 4){
                     document.getElementById("image").src="images/Morning5.jpg";
                     document.getElementById('nextText').innerHTML ="Step 5: Brush your teeth (Check brush teeth tab to see the steps)"
                 }
                 if (counter == 5){
                     alert("This is the last slide");
                     counter = counter-1;
                 }
                 }
            function reversePic(){
                counter = counter-1;
                if (counter == 0){
                    document.getElementById("image").src="images/Morning1.jpeg";
                    document.getElementById('nextText').innerHTML = "Step 1: Make your bed";}
                
                if (counter == 1){
                    document.getElementById("image").src="images/Morning2.jpg";
                    document.getElementById('nextText').innerHTML = "Step 2: Take a shower (Check showering tab to see the steps)";
                }
                if (counter == 2){
                    document.getElementById("image").src="images/Morning3.jpg";
                    document.getElementById('nextText').innerHTML = "Step 3: Get dressed";
                }
                if (counter == 3){
                    document.getElementById("image").src="images/Morning4.jpg";
                    document.getElementById('nextText').innerHTML = "Step 4: Eat Breakfast";
                }
                if (counter == -1){
                    alert("This is the first slide");
                    counter = counter+1;
                }
            }