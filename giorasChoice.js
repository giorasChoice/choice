document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform any necessary form processing or data validation here
    
    window.location.href = 'thank_you.html';
  });




document.addEventListener("DOMContentLoaded", function() {
    let giora;
    let similar;
    let fresh;
    let good;
    let comment;


    
    document.getElementById("myButton").onclick = function() {
        giora = document.getElementById("giora").value;
        console.log(giora);
        
        similar = document.getElementById("vibes").value;
        console.log(similar);
        

        fresh = document.getElementById("fresh").value;
        console.log(fresh);
  
        good = document.getElementById("good").value;
        console.log(good);
  
        comment = document.getElementById("comment").value;
        console.log(comment);

        window.alert("2 MILFAKIA KONTA SOU THESSALONIKI!");

        if (giora="i'm not"){
            window.alert("Why?");
        }
    };

});

