let n = Math.floor(Math.random() * 20) + 1;
let sc = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    if (sc > 0) {
        if(!document.querySelector('.guess').value) {
            sc--;
            document.querySelector('.score').textContent = sc;
            document.querySelector('.message').textContent = 'No Number!';
        }
        else if (document.querySelector('.guess').value > n) {
            document.querySelector('.message').textContent = 'Too High!';
            sc--;
            document.querySelector('.score').textContent = sc;
        }
        else if (document.querySelector('.guess').value < n) {
            document.querySelector('.message').textContent = 'Too Low!';
            sc--;
            document.querySelector('.score').textContent = sc;
        }
        else if (n == document.querySelector('.guess').value) {
            document.querySelector('.message').textContent = '🎉 Congratulations!';
            document.querySelector('.score').textContent = sc;
            document.querySelector('body').style.backgroundColor = '#60b347';

            if(sc > highScore) {
                highScore = sc;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
    } else {
        document.querySelector('.message').textContent = '😵 You loose!';
        document.querySelector('body').style.backgroundColor = 'red';
    }
});

document.querySelector('.again').addEventListener('click', function() {
    sc = 20;
    n = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = sc;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});
