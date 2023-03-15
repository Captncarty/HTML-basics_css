function getMonth(mo) {
    mo--;
    const months = [
        "jan", "Feb", "March", "May", "June"
    ];
    if (months[mo]) {
        console.log(months[mo]);
    } else {
        throw new Error("InvalidMonthNo");
    }
}

try {
    monthName = getMonth(myMonth);
} catch (e) {
    monthName = 'unknown';
    logMyErrors(e);
}
