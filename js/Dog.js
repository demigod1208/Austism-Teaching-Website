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
                    document.getElementById("image").src="images/Dog2.jpg";
                     document.getElementById('nextText').innerHTML ="Check if you have the poo bag with you";
                    }
                 if (counter == 2){
                     document.getElementById("image").src="images/Dog3.jpeg";
                     document.getElementById('nextText').innerHTML ="Check if you have the dog treats with you"
                 }
                 if (counter == 3){
                     document.getElementById("image").src="images/Dog4.jpeg";
                     document.getElementById('nextText').innerHTML ="Check if you have water with you"
                 }
                 if (counter == 4){
                     alert("This is the last slide");
                     counter = counter-1;
                 }
                 }
            function reversePic(){
                counter = counter-1;
                if (counter == 0){
                    document.getElementById("image").src="images/Dog1.jpg";
                    document.getElementById('nextText').innerHTML = "Check if the you have the lead on the dog";}
                
                if (counter == 1){
                    document.getElementById("image").src="images/Dog2.jpg";
                    document.getElementById('nextText').innerHTML = "Check if you have the poo bag with you";
                }
                if (counter == 2){
                    document.getElementById("image").src="images/Dog3.jpeg";
                    document.getElementById('nextText').innerHTML = "Check if you have the dog treats with you";
                }
                if (counter == -1){
                    alert("This is the first slide");
                    counter = counter+1;
                }
            }