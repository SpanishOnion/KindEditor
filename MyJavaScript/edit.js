window.onload = function(){
    function ifChg(){
        var k = C('ke-edit');
        if(k && k.style.height){
            clearInterval(ift);
            var f = k.firstElementChild;
            var b = f.contentWindow.document.querySelector('.ke-content').offsetHeight + 50;
            var x = k.lastElementChild;
            k.style.height = b + 'px';
            f.style.height = b + 'px';
            x.style.height = b - 2 + 'px';
        }
    }
    var ift = setInterval(ifChg, 300);
    // C('ke-icon-source').parentElement.onclick = function(){
    //     var kl = C('ke-outline', true);
    //     var i = 0,l = kl.length;
    //     if((' ' + this.className + ' ').indexOf(' ' + 'ke-selected' + ' ') === -1){
    //         for(;i < l;i++){
    //             kl[i].style.display = '';
    //         }
    //     }else{
    //         setTimeout(function(){
    //             for(;i < l;i++){
    //                 kl[i].style.display = 'block';
    //             }
    //         },300);
    //     }
    // };
};