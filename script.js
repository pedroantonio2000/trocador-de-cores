const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let interval;

function trocandoCores() {
    interval = setInterval(() => {
        let hashtag = '#';
        let outroHashtag = '#';
        
        for(let i = 0; i < 6; i++) {
            hashtag += colors[colorsRandom()];
        }
        for(let i = 0; i < 6; i++) {
            outroHashtag += colors[colorsRandom()];
        }
        
        // document.body.style.backgroundImage = `linear-gradient(${hashtag}, ${outroHashtag})`;
        document.body.style.backgroundColor = hashtag;
        document.body.style.transitionDuration = '200ms';
        
    },  1000);
        
}
    
function colorsRandom() {
    return Math.floor(Math.random() * colors.length);
}

window.addEventListener('load', trocandoCores);

