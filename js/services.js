// function for fliping services cards
document.addEventListener('DOMContentLoaded', function () {
    var serviceListItems = document.querySelectorAll('#services-list li');
    var serviceDescItems = document.querySelectorAll('.services-desc .item');

    serviceListItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            serviceListItems.forEach(function (li) {
                li.classList.remove('active');
            });
            serviceDescItems.forEach(function (desc) {
                desc.classList.remove('active');
            });

            this.classList.add('active');
            serviceDescItems[index].classList.add('active');
        });
    });
});