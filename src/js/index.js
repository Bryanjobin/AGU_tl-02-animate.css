import * as bootstrap from 'bootstrap'
import 'animate.css';
import {WOW} from "wowjs";
new WOW().init();


// Canvas
const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#DCBB0D';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#8B2EB7';
ctx.arc(150, 50, 50, 00, 2*Math.PI);

ctx.fill();



// Rgraph
activity = new RGraph.Activity({
    id: 'graph',
    min: 0,
    max: 100,
    value: [90,70,50],
    options: {
        icons: [
            '../images/activityMeter-arrowright.png',
            '../images/activityMeter-arrowup.png',
            '../images/activityMeter-arrowdown.png'
        ],
        width: 50,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        colors: ['#DCBB0D', '#8B2EB7', 'white'],
        backgroundColor: 'black'
    }
}).grow().responsive([
    {maxWidth: null, width: 450, height: 450, options: {width: null}, parentCss: {'float':'right', textAlign:'none',width:''}},
    {maxWidth: 750,  width: 250, height: 250, options: {width: 25}, parentCss: {'float':'none', textAlign:'center',width:'100%'}}
]);
