let numberOfMonth = prompt ('Write number of the month to see the season', '');
let message = (numberOfMonth==12 || numberOfMonth==1 || numberOfMonth==2) ? 'It is WINTER':
(numberOfMonth > 2 && numberOfMonth <6) ? 'It is SPRING':
(numberOfMonth >= 6 && numberOfMonth <= 8) ? 'It is SUMMER':
(numberOfMonth >=9 && numberOfMonth <= 11) ? 'It is AUTUMN':
 'Mistake';

alert (message);