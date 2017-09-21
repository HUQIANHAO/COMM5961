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
    msgBox = document.getElementById('msgBox'),
    text1 = document.getElementById('text1'),
    text2 = document.getElementById('text2'),
    add = document.getElementById('add'),
    sub = document.getElementById('sub'),
    multiply = document.getElementById('multi'),
    devide = document.getElementById('devide');

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
    msgBox.innerHTML = "<h2>" + text1.value + " + " + text2.value + " = " + (parseInt(text1.value) + parseInt(text2.value)) + "</h2>";
});

sub.addEventListener('click', () => {
    msgBox.innerHTML = "<h2>" + text1.value + " - " + text2.value + " = " + (parseInt(text1.value) - parseInt(text2.value)) + "</h2>";
});

multiply.addEventListener('click', () => {
    msgBox.innerHTML = "<h2>" + text1.value + " × " + text2.value + " = " + (parseInt(text1.value) * parseInt(text2.value)) + "</h2>";
});

devide.addEventListener('click', () => {
    msgBox.innerHTML = "<h2>" + text1.value + " ÷ " + text2.value + " = " + (parseInt(text1.value) / parseInt(text2.value)) + "</h2>";
});