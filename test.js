function convertSecondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsFinal = remainingSeconds % 60;

    return {
        hours: hours,
        minutes: minutes,
        seconds: remainingSecondsFinal,
    };
}

const inputSeconds = 1672656000; // Change this to your desired number of seconds
const time = convertSecondsToTime(inputSeconds);

// console.log(`${inputSeconds} seconds is equal to:`);
console.log(`${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds.`);
