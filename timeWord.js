const timeWordMap = {
    0: 'twelve',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty'
}

function timeWord(time) {
    if (time == "00:00")
        return "midnight";
    if (time == "12:00")
        return "noon";

    const [hours, minutes] = time.split(':')
        .map(t => parseInt(t));
    
    const meridiem = hours < 12 ? "am"  : "pm";
    const hourStr = timeWordMap[(hours % 12)]
    let minuteStr;
    if (minutes == 0)
        minuteStr = "o'clock";
    else if (minutes < 10)
        minuteStr = "oh " + timeWordMap[minutes];
    else if (minutes % 10 == 0 || minutes < 20)
        minuteStr = timeWordMap[minutes];
    else {
        minuteStr = timeWordMap[Math.floor(minutes / 10) * 10]
            + " " + timeWordMap[minutes % 10]
    }
    return hourStr + " " + minuteStr + " " + meridiem;
}

module.exports = timeWord;