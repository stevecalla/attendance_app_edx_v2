// Get current UTC time in Unix timestamp format
// returns 1705107696
async function current_utc_timestamp() {
  const currentUTCTimestamp = Math.floor(new Date().getTime() / 1000);
  return currentUTCTimestamp;
}

// Function to convert Unix timestamp to formatted date string
// returns Mon, 07 Jun 2024 12:34:56 GMT
async function format_unix_timestamp(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);

  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  };

  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
}

// Function to convert Unix timestamp to formatted date string in local time
// returns Sat, Jun 08, 2024, 05:49:16 AM
async function format_unix_timestamp_localTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);

  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const formattedDate = date.toLocaleString("en-US", options);
  
  return formattedDate;
}

module.exports = {
  current_utc_timestamp,
  format_unix_timestamp,
  format_unix_timestamp_localTime,
};
