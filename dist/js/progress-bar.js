function calculateTotalValue(length) {
    let minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds;

    return time;
}

function calculateCurrentValue(currentTime) {
    let current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? +current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
}

function initProgressBar() {
    let player = document.getElementById('player');
    let length = player.duration;
    let current_time = player.currentTime;

    // calculate total length of value
    let totalLength = calculateTotalValue(length);
    jQuery(".end-time").html(totalLength);

    // calculate current value time
    let currentTime = calculateCurrentValue(current_time);
    jQuery(".start-time").html(currentTime);

    let progressbar = document.getElementById('elapsed');
    progressbar.value = (player.currentTime / player.duration);
    progressbar.addEventListener("click", seek);

    function seek(evt) {
        let percent = evt.offsetX / this.offsetWidth;
        player.currentTime = percent * player.duration;
        progressbar.value = percent / 100;
    }
}

function initPlayers(num) {
    // pass num in if there are multiple audio players e.g 'player' + i

    for (let i = 0; i < num; i++) {
        (function () {

            // Variables
            // ----------------------------------------------------------
            // audio embed object
            let player = document.getElementById('player'),
                isPlaying = false,
                playBtn = document.querySelector('.play');

            // Controls Listeners
            // ----------------------------------------------------------
            if (playBtn != null) {
                playBtn.addEventListener('click', function () {
                    togglePlay();
                });
            }

            // Controls & Sounds Methods
            // ----------------------------------------------------------
            function togglePlay() {
                if (player.paused === false) {
                    player.pause();
                    isPlaying = false;
                    $('.play').removeClass('active');

                } else {
                    player.play();
                    $('.play').addClass('active');
                    isPlaying = true;
                }
            }
        }());
    }
}

initPlayers(jQuery('.audio-wrapper').length);