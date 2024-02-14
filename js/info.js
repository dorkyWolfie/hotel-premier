// function for info table
document.addEventListener('DOMContentLoaded', function () {
  var listItems = document.querySelectorAll('#table-list li');
  var descItems = document.querySelectorAll('.item');

  listItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      listItems.forEach(function (li) {
        li.classList.remove('active');
      });
      descItems.forEach(function (desc) {
        desc.classList.remove('active');
      });
      this.classList.add('active');
      descItems[index].classList.add('active');
    });
  });
});