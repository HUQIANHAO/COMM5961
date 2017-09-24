const trigger = document.querySelectorAll('a'),
    target = document.getElementById('targetAside'),
    timeAside = document.getElementById('timeAside'),
    time = document.getElementById('time'),
    setTime = () => {
        const now = new Date();
        time.innerHTML = now.toLocaleTimeString();
        if (now.getHours() < 19 && now.getHours() > 5) {
            timeAside.classList.add('day');
            timeAside.classList.remove('night');
        } else {
            timeAside.classList.add('night');
            timeAside.classList.remove('day');
        }
    },
    text1 = document.getElementById('text1'),
    text2 = document.getElementById('text2'),
    msgBox = document.getElementById('msgBox'),
    add = document.getElementById('add'),
    sub = document.getElementById('sub'),
    multiply = document.getElementById('multi'),
    devide = document.getElementById('devide'),
    setBlankBox = () => {
        if (text1.value == "") {
            text1.value = "0";
        }

        if (text2.value == "") {
            text2.value = "0";
        }
    };

trigger.forEach($a => $a.addEventListener('mouseover', () => {
    target.classList.add('highlight');
    target.innerHTML = '<h2>Be yourself</h2><p>Hello world!</p>';
}));
trigger.forEach($a => $a.addEventListener('mouseout', () => {
    target.classList.remove('highlight');
    target.innerHTML = '<h2>Be yourself</h2><p>See what can be shown here.</p>';
}));
setInterval(() => setTime(), 1000);

add.addEventListener('click', () => {
    setBlankBox();
    msgBox.innerHTML = text1.value + " + " + text2.value + " = " + (parseFloat(text1.value) + parseFloat(text2.value));
});

sub.addEventListener('click', () => {
    setBlankBox();
    msgBox.innerHTML = text1.value + " - " + text2.value + " = " + (parseFloat(text1.value) - parseFloat(text2.value));
});

multiply.addEventListener('click', () => {
    setBlankBox();
    msgBox.innerHTML = text1.value + " × " + text2.value + " = " + (parseFloat(text1.value) * parseFloat(text2.value));
});

devide.addEventListener('click', () => {
    setBlankBox();
    if (text2.value == "0") {
        msgBox.innerHTML = "Cannot devide by 0.";
    } else {
        msgBox.innerHTML = text1.value + " ÷ " + text2.value + " = " + (parseFloat(text1.value) / parseFloat(text2.value));
    }
});