function myFunction() {

    const button = document.getElementById('answer-field');

    button.classList.remove('answer-field');
    button.classList.add('answer-field-animation');

    var delayInMilliseconds = 3000; //1 second

    setTimeout(function () {

        button.classList.remove('answer-field-animation');
        button.classList.add('answer-field');

        // Define and retrieve the name
        let name = document.getElementById('name').value;
        console.log(name);

        // Define and retrieve the user's question
        let question = document.getElementById('question').value;
        console.log(question);

        // Validate the user's question. If empty, alert the user, otherwise select a random answer
        var x = document.getElementById('question').value;
        if (x == "") {
            alert("Please enter a question");
            document.getElementById("eightBall").innerHTML = "";
        } else {
            // Start 8 Ball Number Animation


            // Show Answer
            var eightBallNumber = document.getElementById("eightBallNumber");
            eightBallNumber.style.display = "none";

            let randomNumber = Math.floor(Math.random() * 8);
            switch (randomNumber) {
                case 0:
                    eightBall = "It is certain";
                    break;
                case 1:
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

            // Return generated answer into the HTML field
            document.getElementById("eightBall").innerHTML = eightBall;
            console.log(eightBall)
        }

    }, delayInMilliseconds);


};