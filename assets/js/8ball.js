submit.addEventListener("click", function () {
    let userName = document.getElementsById(userName);;
    let userQuestion = document.getElementsById(userQuestion);;
    let submit = document.getElementsById(submit)
    if (userQuestion.value.length < 1) {
        alert('Enter a question!');
    } else {
        eightBall.innerText = "";
        let randomNumber = Math.floor(Math.random() * 8);
        switch (randomNumber) {
            case 0:
                eightBall = "It is certain";
                break;
            case 1:
                z
                eightBall = "It is decidedly so";
                break;
            case 2:
                eightBall = "Reply hazy try again";
                break;
            case 3:
                eightBall = "Cannot predict now";
                break;
            case 4:
                eightBall = "Do not count on it";
                break;
            case 5:
                eightBall = "My sources say no";
                break;
            case 6:
                eightBall = "Outlook not so good";
                break;
            case 7:
                eightBall = "Signs point to yes";
                break;
        }
        answer.innerText = answers[eightBall];
    }
});

//userName ? console.log(`Hello ${userName}!`) : console.log("Hello!");

//console.log(`${userName}\'s question to the Magic 8 Ball was: ${userQuestion}`);




//console.log(`The Magic 8 Ball Says: ${eightBall}!`);