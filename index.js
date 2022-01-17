function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    const low = "I can't hear you!"
    const high = "YES INDEED!"
    const love = "I would love to!"
    const les = "Let's have dinner together!"
    if (string.toLowerCase() === string) {
        return low;
    }
    else if (string.toUpperCase() === string) {
        return high;
    }
    else if (string === "Let's have dinner together!"){
        return love;
    }
}