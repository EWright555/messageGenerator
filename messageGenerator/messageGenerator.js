//Getting hour name
let currentDate = new Date();
let currentHour = currentDate.getHours();
const getTimeBlock = () =>{
    if (currentHour>=5&&currentHour<12){
        return "Morning";
    }
    else if (currentHour>=12&&currentHour<17){
        return "Afternoon";
    }
    else if (currentHour>=17&&currentHour<21){
        return "Evening";
    }
    else {
        return "Night";
    }
}
let timeBlock = getTimeBlock();
//console.log(timeBlock);
//get postive descriptor
let posDesArr = ["an excellent","a fantastic","an exceptional","a great","a positive","a superb","a wonderful","a super"];
let randNum = Math.floor(Math.random()*(posDesArr.length-1))
let posDes = posDesArr[randNum];
//get quote
let quotesArray = ["The past is your lesson. And the present is your gift. The future is your motivation.",
"Everything in life is temporary. Be patient and positive. And watch the endless amount of blessings you’ll receive.",
"Behind every successful person there are many unsuccessful years.",
"Good things are coming, just keep going!",
"Every time you thought you couldn’t keep moving forward, you did. Take a moment to appreciate your strength.",
"Your record for getting through bad days is 100%, keep that record going!",
"You have to fight through some bad days to get to the best days of your life.",
"Rage, rage against the dying of the light!",
"You did not come this far, to only come this far.",
"You have it within you right now to get where you want to be later.",
"Cry, scream if you need to! Just do what you need to do to keep pushing forward!",
"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
"Take a break, but carry on."];
let randNum2 = Math.floor(Math.random()*(quotesArray.length-1))
let quote = quotesArray[randNum2];
/*console.log(timeBlock);
console.log(posDes);
console.log(quote);*/
console.log(`Good ${timeBlock}, friend! I hope you're having ${posDes} time. Just remember: '${quote}' Stay strong!`)
//added comments to test github
//added more comments to practice git