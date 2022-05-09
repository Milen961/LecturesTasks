function tickets(day, age) {
    let price = 0;
    if (day == 'Weekday') {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
            price = 12;
        }

    } else if (day == 'Weekend') {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
            price = 15;
        } else if (age > 18 && age <= 64) {
            price = 20;
        }
    } else if (day == 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5;
        }

    }
    if (price != 0) {
        console.log(price + '$');
    } else {
        console.log('Error!');
    }
}

tickets('Weekday', 42);
tickets('Holiday', -12);
tickets('Holiday', 15);
tickets('Snow day', 15);
tickets('Weekend', 66);
tickets('Weekday', 35);