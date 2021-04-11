    var counts = { room: 1, adult: 1, children: 0 }

// (function () {
//     updateChildCount(3)
// })();
window.onload = function () {
    updateChildCount(3)
};

function updateChildCount(value) {
    switch (value) {
        case 0:
            document.getElementById('roomCount').innerText = counts.room;
            break;
        case 1:
            document.getElementById('adultCount').innerText = counts.adult;
            break;
        case 2:
            document.getElementById('childCount').innerText = counts.children;
            break;
        case 3:
            document.getElementById('roomCount').innerText = counts.room;
            document.getElementById('adultCount').innerText = counts.adult;
            document.getElementById('childCount').innerText = counts.children;
            break;
        case 4:
            document.getElementById('roomCount').innerText = counts.adult;
            document.getElementById('roomCount').innerText = counts.children;
    }
}



function updateValue(operation, valueChange) {
    if (operation == 'plus'){
        changeSpecificValue(valueChange);
    }
}

function limitValue(){
    if(counts.room<5){
        updateChildCount(0);
    }
    
    if(counts.adult>4)
    {
        updateChildCount(4);   
    }
}
function changeSpecificValue(value) {
    switch (value) {
        case 0:
            counts.room++;
            updateChildCount(value);
            break;
        case 1:
            counts.adult++;
            updateChildCount(value);
            break;
        case 2:
            counts.children++;
            updateChildCount(value);
            break;
            
    }
}
  function minusRoomCount() {
    if (counts.room > 1) {
        counts.room--;
        updateChildCount(0);
    }
    if(counts.adult>1)
    {
       counts.adult--;
       updateChildCount(1);
       updateChildCount(0);
    }
    if(counts.children>0)
    {
       counts.children--;
       updateChildCount(2)
         
    }

      
}
