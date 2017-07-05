/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

const now = new Date().valueOf();

const getNextBirthday = function (string) {
  let arr = string.split('/');
  arr[2] = new Date().getFullYear(); // change year to this year
  let nextBirthday = arr.join('/');
  if (now > new Date(nextBirthday).valueOf()) { // if birthday passed this year
    arr[2] = Number(arr[2]) + 1;  // change year to next year
    nextBirthday = arr.join('/');
  }
  return nextBirthday;  // string
};

const daysUntilDate = function (string) {
  let then = new Date(string).valueOf();
  let seconds = (then - now) / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  return Math.floor(days);
};

const birthdayReminder = function (arr) {
  let messages = [];

  arr.forEach(function (person) {
    messages.push(`${person.name}'s birthday is in ${daysUntilDate(getNextBirthday(person.dob))} days`);
  })
  return messages;
};

const birthdays = [
  {
    name: 'Chris',
    dob: '01/26/1986'
  },
  {
    name: 'Alexa',
    dob: '08/15/1991'
  }
]

birthdayReminder(birthdays).forEach((msg) => console.log(msg));
