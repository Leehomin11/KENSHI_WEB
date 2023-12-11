const spans = document.querySelectorAll("span");

spans[0].onclick = function () {
  window.scroll({ top: 0, behavior: "smooth" });
};
spans[1].onclick = function () {
  window.scroll({ top: 820, behavior: "smooth" });
};
spans[2].onclick = function () {
  window.scroll({ top: 1710, behavior: "smooth" });
};
