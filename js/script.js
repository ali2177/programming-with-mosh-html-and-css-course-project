const collapsibles = document.querySelectorAll(".collapsible");
console.log(collapsibles);
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("collapsible--expanded");
  })
);
