// Highlight active nav + mobile menu close + scroll-reveal animation
(function () {
  var path = location.pathname.split('/').pop() || 'index.html';
  var page = path.replace('.html', '') || 'index';
  document.querySelectorAll('.nav a').forEach(function (a) {
    if (a.getAttribute('data-page') === page) a.classList.add('active');
    a.addEventListener('click', function () {
      var sb = document.getElementById('sidebar');
      if (sb) sb.classList.remove('open');
    });
  });

  // Scroll reveal — adds .in to .reveal elements as they enter the viewport
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
})();
