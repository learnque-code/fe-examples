self.addEventListener('message', function (e) {
    const data = e.data;
    console.log(data);
    switch (data.cmd) {
        case 'start':
            // Long running logic.
            setTimeout(function () {
                self.postMessage('WORKER SAY: ' + data.msg);
            }, 5000);
            break;
        case 'stop':
            self.postMessage('WORKER SAY: ' + data.msg);
            self.close();
        default:
            self.postMessage('WORKER SAY:  UNKNOWN');
    }
});
