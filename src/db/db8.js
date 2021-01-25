function quickServiceTest(){
    var bridge = new WebOSServiceBridge();
    var url = 'luna://com.webos.service.applicationmanager/running';

    bridge.onservicecallback = callback;

    function callback(msg){
        var response = JSON.parse(msg);
        alert(response.returnValue);
    }

    var params = '{}';
    bridge.call(url, params);
}

export { quickServiceTest };