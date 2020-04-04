const btn = $('.mars-btn');

btn.on('click', function() {
    let url = document.getElementById('url').value;
    let id = '';
    let list = '';

    // https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
    id = url.split('v=')[1];
    list = id.indexOf('&');
    if (list != -1) {
        id = id.substring(0, list);
    }
    let mq = document.getElementById('mq');
    mq.src = 'https://img.youtube.com/vi/' + id + '/mqdefault.jpg';
    
    $('#mq').off('click').on('click',() => {
        window.open(mq.src);       
    });    

    let hq = document.getElementById('hq');
    hq.src = 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg';

    $('#hq').off('click').on('click',() => {
        window.open(hq.src);         
    });

    let sd = document.getElementById('sd');
    sd.src = 'https://img.youtube.com/vi/' + id + '/sddefault.jpg';

    $('#sd').off('click').on('click',() => {
        window.open(sd.src);       
    });

    let max = document.getElementById('max');
    max.src = 'https://img.youtube.com/vi/' + id + '/maxresdefault.jpg';

    $('#max').off('click').on('click',() => {
        window.open(max.src);        
    });
});