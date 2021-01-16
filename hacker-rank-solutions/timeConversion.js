function timeConversion(s) {
    let time = s.split(":");
    let hour = parseInt(time[0]);
    let isPM = time[2].substring(2, 4) === "PM";
    if (isPM && hour < 12) {
        time[0] = hour + 12;
    } else if (!isPM && hour === 12) {
        time[0] = "00";
    }

    return `${time[0]}:${time[1]}:${time[2].substring(0, 2)}`
}
