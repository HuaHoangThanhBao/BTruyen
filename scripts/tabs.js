var tabs = document.getElementsByClassName("tabs__group");
for (let i = 1; i < tabs.length; ++i) {
    tabs[i].style.display = "none";
}

var tablinks = document.getElementsByClassName("tabs--link");
for (let i = 0; i < tablinks.length; ++i) {
    tablinks[i].addEventListener('click', function () {
        for (const tab of tabs) {
            tab.style.display = "none";
        }

        if (i < tabs.length) {
            tabs[i].style.display = "block";
        }
    })
}