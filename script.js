//date object
const date = new Date();

//funtiion that will call the whole code an pass it along, so each month will be rendered
const renderCalendar = () => {
    date.setDate(1);

    console.log(date.getDay());
    
    const monthDays = document.querySelector(".days");
    
    const lastDay = new Date (date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const prevLastDay = new Date (date.getFullYear(), date.getMonth(), 0).getDate();
    
    const firstDayIndex = date.getDay();
    
    const lastDayIndex = new Date (date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const nextDays = 7 - lastDayIndex -1; 
    

    //array of strings (months of the year)
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    
    //displays heaading (current month) dynmamically with js and DOM manipulation
    document.querySelector(".date h1").innerHTML
    = months[date.getMonth()];
    
    //displays paragraph (current date) dynamically with js and DOM manipulation
    document.querySelector(".date p").innerHTML
    = date.toDateString();
    
    //day
    let days = "";
    
    //days from previous months
    for (let x = firstDayIndex; x > 0; x--){
        days += `<div class="prev-date">${prevLastDay - x +1}</div>`;
    } 
    
    //loop through number 1 - 31 and display them as content of the days div element, highlight today
    for(let i = 1; i <= lastDay; i++){
        if( i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
            days += `<div>${i}</div>`;
        } else {
        days += `<div>${i}</div>`;
        }
        }
      
    //days from next months 
    for(let j = 1; j<= nextDays; j++){
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
}


//arrows for going to previous and next month
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() -1)
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() +1)
    renderCalendar();
});

renderCalendar()