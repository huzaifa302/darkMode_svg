const moonPath = "M83 153C83 237.5 172 305.928 177.5 306C79.4695 306 0 237.5 0 153C0 68.5004 79.4695 0 177.5 0C166 0.315964 83 68.5004 83 153Z";

const sunPath = "M355 153C355 237.5 275.531 306 177.5 306C79.4695 306 0 237.5 0 153C0 68.5004 79.4695 0 177.5 0C275.531 0 355 68.5004 355 153Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener('click', () => {
  const timeline = anime.timeline({
   duration : 750,
   easing : "easeOutExpo"
  });
  timeline.add({
    targets : ".sun",
    d :[
        {value : toggle ? sunPath : moonPath}
    ]
  })
  .add({
     targets: '#darkMode',
     rotate: 320
  }, '-= 350')
 .add({
    targets: "section",
    backgroundColor: toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
    color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
 }, '-= 700');

   if(!toggle){
    toggle = true;
   }
   else{
    toggle = false;
   }


});