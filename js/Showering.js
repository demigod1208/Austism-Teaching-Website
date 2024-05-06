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
                    document.getElementById("image").src="images/Shower2.jpg";
                     document.getElementById('nextText').innerHTML ="Step 2: Check that your towel is ready";
                    }
                 if (counter == 2){
                     document.getElementById("image").src="images/Shower3.jpg";
                     document.getElementById('nextText').innerHTML ="Step 3: Use Shower Gel"
                 }
                 if (counter == 3){
                     document.getElementById("image").src="images/Shower4.jpg";
                     document.getElementById('nextText').innerHTML ="Step 4: Use Shampoo"
                 }
                 if (counter == 4){
                     document.getElementById("image").src="images/Shower5.jpg";
                     document.getElementById('nextText').innerHTML ="Step 5: Turn off Shower"
                 }
                 if (counter == 5){
                     document.getElementById("image").src="images/Shower6.jpg";
                     document.getElementById('nextText').innerHTML ="Step 6: Dry your self with towel before moving out"
                 }
                 if (counter == 6){
                     alert("This is the last slide");
                     counter = counter-1;
                 }
                 }
            function reversePic(){
                counter = counter-1;
                if (counter == 0){
                    document.getElementById("image").src="images/Shower1.jpg";
                    document.getElementById('nextText').innerHTML = "Step 1: Test the water temperature";}
                
                if (counter == 1){
                    document.getElementById("image").src="images/Shower2.jpg";
                    document.getElementById('nextText').innerHTML = "Step 2: Check that your towel is ready";
                }
                if (counter == 2){
                    document.getElementById("image").src="images/Shower3.jpg";
                    document.getElementById('nextText').innerHTML = "Step 3: Use Shower Gel";
                }
                if (counter == 3){
                    document.getElementById("image").src="images/Shower4.jpg";
                    document.getElementById('nextText').innerHTML = "Step 4: Use Shampoo";
                }
                if (counter == 4){
                     document.getElementById("image").src="images/Shower5.jpg";
                     document.getElementById('nextText').innerHTML ="Step 5: Turn off Shower"
                 }
                if (counter == -1){
                    alert("This is the first slide");
                    counter = counter+1;
                }
            }