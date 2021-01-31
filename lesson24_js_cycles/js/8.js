const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = 0;

while (confirm(`${week[day]} Want to see next day?`)) {
  day = (day + 1) % week.length;
}