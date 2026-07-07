let points = 10;

points += ++(String(points).length);

console.log(points); // 13

points -= ++(String(points).length) + (String(points).length) ;

console.log(points); // 8;
