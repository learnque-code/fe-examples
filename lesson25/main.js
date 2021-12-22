const worker = new Worker('scripts/task.js');

function sayHi() {
    worker.postMessage({
        'cmd': 'start',
        'msg': 'Hi',
    });
}

function stop() {
    worker.postMessage({
        'cmd': 'stop',
        'msg': 'I terminated myself',
    });
}

worker.addEventListener('message', function (e) {
    document.getElementById('result').textContent = e.data;
});
