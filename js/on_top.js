//Get the button
var myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){scrollFunction()};

function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        myButton.style.display = "block";
    }
    else
    {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('load', function () {

    document.body.addEventListener('scroll', function() { 
    
        if (Math.ceil(this.scrollTop) + this.offsetHeight == this.scrollHeight) {
               myButton.style.backgroundColor = "black";
               alert("FUCK");
        } 
    }); 

})