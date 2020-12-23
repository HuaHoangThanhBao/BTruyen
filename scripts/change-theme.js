const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
});