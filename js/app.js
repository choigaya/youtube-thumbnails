const btn = $('.btn-confirm');

btn.on('click', function() {
    var url = document.getElementById('url').value;
    var id = url.replace('https://www.youtube.com/watch?v=','');
    var mq = document.getElementById('mq');
    mq.src = 'http://img.youtube.com/vi/' + id + '/mqdefault.jpg';
        
    var hq = document.getElementById('hq');
    hq.src = 'http://img.youtube.com/vi/' + id + '/hqdefault.jpg';

    var sd = document.getElementById('sd');
    sd.src = 'http://img.youtube.com/vi/' + id + '/sddefault.jpg';

    var max = document.getElementById('max');
    max.src = 'http://img.youtube.com/vi/' + id + '/maxresdefault.jpg';
});