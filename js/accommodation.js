// function for fliping accommodation cards
document.addEventListener('DOMContentLoaded', function () {
    var roomsListItems = document.querySelectorAll('#accommodation-list li');
    var roomsDescItems = document.querySelectorAll('.accommodation-desc .item');

    roomsListItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            roomsListItems.forEach(function (li) {
                li.classList.remove('active');
            });
            roomsDescItems.forEach(function (desc) {
                desc.classList.remove('active');
            });

            this.classList.add('active');
            roomsDescItems[index].classList.add('active');
        });
    });
});