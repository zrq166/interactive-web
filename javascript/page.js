var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#c1a1d3', '#ffcfcf', '#ffd66b'],
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    menu: '#menu',
    scrollBar:true,
    afterLoad: function(anchorLink, index){
        console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
    },
    onLeave: function(index, nextIndex, direction){
        console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);

    },
});
