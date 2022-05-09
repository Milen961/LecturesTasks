function DayofWeek(daysAsNumber){
    if (daysAsNumber < 1 || daysAsNumber > 7){
        console.log('Invalid day!');
    }else {

    
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"


    ];
    let index = daysAsNumber - 1;
    console.log(days[index]);
    }
}
DayofWeek(1);
DayofWeek(3);
DayofWeek(6);
DayofWeek(-3);
DayofWeek(33)