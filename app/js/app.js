const btn = $('.mars-btn');

btn.on('click', function() {
    var url = document.getElementById('url').value;
    var id = url.replace('https://www.youtube.com/watch?v=','');
    var mq = document.getElementById('mq');
    mq.src = 'https://img.youtube.com/vi/' + id + '/mqdefault.jpg';
    
    $('#mq').click(function() {
        window.open(mq.src);         
    });    

    var hq = document.getElementById('hq');
    hq.src = 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg';

    $('#hq').click(function() {
        window.open(hq.src);         
    });

    var sd = document.getElementById('sd');
    sd.src = 'https://img.youtube.com/vi/' + id + '/sddefault.jpg';

    
    $('#sd').click(function() {
        window.open(sd.src);         
    });

    var max = document.getElementById('max');
    max.src = 'https://img.youtube.com/vi/' + id + '/maxresdefault.jpg';

    
    $('#max').click(function() {
        window.open(max.src);         
    });
});