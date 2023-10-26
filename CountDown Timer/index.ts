// Getting Current Date and Time as Formatted Strings

// Create a new Date object
let date_ob = new Date();

// Get current date
let date: string = ("0" + date_ob.getDate()).slice(-2);

// Get current month (Note: January is 0, so we add 1)
let month: string = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// Get current year
let year: number = date_ob.getFullYear();

// Get current hours, minutes, and seconds
let hours: number = date_ob.getHours();
let minutes: number = date_ob.getMinutes();
let seconds: number = date_ob.getSeconds();

// Format date as YYYY-MM-DD
let formattedDate: string = year + "-" + month + "-" + date;

// Format date and time as YYYY-MM-DD hh:mm:ss
let formattedDateTime: string = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

// Format time as HH:MM
let formattedTime: string = hours + ":" + minutes;

console.log("Formatted Date: " + formattedDate);
console.log("Formatted Date & Time: " + formattedDateTime);
console.log("Formatted Time: " + formattedTime);

// Getting Current Timestamp

// Get current timestamp in milliseconds
let timestampMs: number = Date.now();

// Convert the timestamp to seconds
let timestampSeconds: number = Math.floor(timestampMs / 1000);

console.log("Timestamp in milliseconds: " + timestampMs);
console.log("Timestamp in seconds: " + timestampSeconds);

// Getting Date and Time from Timestamp

// Example timestamp (in milliseconds)
let timestamp: number = 1631881200000; // Replace with your timestamp

// Create a Date object from the timestamp
let date_ob_from_timestamp: Date = new Date(timestamp);

// Get date components
let date_from_timestamp: number = date_ob_from_timestamp.getDate();
let month_from_timestamp: number = date_ob_from_timestamp.getMonth() + 1; // Adding 1 because January is 0
let year_from_timestamp: number = date_ob_from_timestamp.getFullYear();

// Format date as YYYY-MM-DD
let formattedDateFromTimestamp: string = year_from_timestamp + "-" + month_from_timestamp + "-" + date_from_timestamp;

console.log("Formatted Date from Timestamp: " + formattedDateFromTimestamp);
