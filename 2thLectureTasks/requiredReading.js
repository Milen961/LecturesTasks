function requiRedreading(pagesOfCurrentBook, readPagesForHour, dayForReading){

 let totalhours = pagesOfCurrentBook / readPagesForHour;
 let requiredHours = totalhours / dayForReading;
 console.log(requiredHours);

}
requiRedreading(212,
    20 ,
    2 )

