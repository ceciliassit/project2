$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColors: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
        navigation: true,
        continuousVertical: true,
        afterRender: function() {
            setInterval(function() {
                $.fn.fullpage.moveSectionDown();
            }, 60000);
        }
    });
});


function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})



// $('#block').vide({
  //  mp4: 'hkvideo',
  //  webm: '',
  //  ogv: '',
  //  poster: 'hkvideo',
// }, { posterType: 'mp4' });
