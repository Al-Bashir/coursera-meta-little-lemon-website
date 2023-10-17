export const convertDateToISODateOnly = (date) => {
    const year = date.getFullYear(); // Get the year (4 digits)
    const month = date.getMonth() + 1; // Get the month (0-based, so add 1 to get 1-12)
    const day = date.getDate(); // Get the day of the month (1-31)

    // Format the date as a string (e.g., "YYYY-MM-DD")
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedDate
}

// get today date value
export const nextMonth = new Date();
nextMonth.setMonth(nextMonth.getMonth() + 3)