
document.addEventListener("DOMContentLoaded", function() {
    // Function to get the current day of the week
    function getCurrentDayOfTheWeek() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        return days[today.getDay()];
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        return Date.now();
    }

    // Update the DOM elements with the data
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${getCurrentDayOfTheWeek()}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (ms): ${getCurrentUTCTime()}`;
});