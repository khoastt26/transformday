/*function numberofDay1(){
    let day = document.getElementById('input').value;
    if(day == 1) {
        document.getElementById('Result').innerHTML = 'chủ nhật';
    }
    else if(day == 2) {
            document.getElementById('Result').innerHTML = 'thứ hai';
    }
      
    else if(day == 3) {
        document.getElementById('Result').innerHTML = 'thứ ba';
    }
   else if(day == 4) {
        document.getElementById('Result').innerHTML = 'thứ tư';
    }
   else if(day == 5) {
        document.getElementById('Result').innerHTML = 'thứ năm';
    }
   else if(day == 6) {
        document.getElementById('Result').innerHTML = 'thứ sáu';
    }
    else  if(day == 7) {
        document.getElementById('Result').innerHTML = 'thứ bảy';
    } else {
        document.getElementById('Result').innerHTML = 'không thỏa mãn';
    }
    
}*/
function numberofDay2() {
    let day = document.getElementById('input').value;
    switch(day) {
       case '1': document.getElementById('Result').innerHTML = 'chủ nhật'; break;
       case '2': document.getElementById('Result').innerHTML = 'thứ hai'; break;
       case '3': document.getElementById('Result').innerHTML = 'thứ ba'; break;
       case '4': document.getElementById('Result').innerHTML = 'thứ tư'; break;
       case '5': document.getElementById('Result').innerHTML = 'thứ năm'; break;
       case '6': document.getElementById('Result').innerHTML = 'thứ sáu'; break;
       case '7': document.getElementById('Result').innerHTML = 'thứ bảy'; break;
       default:
        document.getElementById('Result').innerHTML = 'không thỏa mãn';break;
    }

}