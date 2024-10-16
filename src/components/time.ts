const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-indexed
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

const monthNames = [
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
  "December",
];

const dayWithSuffix =
  day + (day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th");

export const getTimeParams = (): any => {
  // Split the input time into hours and minutes

  return { now, year, month, day, hours, minutes };
};

export const convertDate = (): string => {
  // Split the input time into hours and minutes

  return `${dayWithSuffix} ${monthNames[month - 1]}, ${year}`;
};

export const convertToAmPm = (time: string): string => {
  // Split the input time into hours and minutes
  const [hoursString, minutes] = time.split(":");
  const hours = parseInt(hoursString);

  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12;

  // Format the time string
  const formattedTime = `${hours12}:${minutes} ${period}`;

  return formattedTime;
};
