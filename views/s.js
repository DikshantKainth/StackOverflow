
    function myfunc1() {
        document.getElementById("dropdown1").classList.toggle("show");
    }
    function myfunc2() {
        document.getElementById("para1").classList.toggle("show");
    }
    function myfunc3() {
        document.getElementById("para2").classList.toggle("show");
    }
    function myfunc4() {
        document.getElementById("middrop1").classList.toggle("show");
    }
    function myfunc5() {
        document.getElementById("bb").classList.toggle("show");
    }
    
    window.onclick = function (event) {
        if (!event.target.matches('.btn1')) {
            var dropdowns = document.getElementsByClassName("dropdown");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        if (!event.target.matches('.btn2')) {
            var dropdowns = document.getElementsByClassName("para");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        if (!event.target.matches('.btn3')) {
            var dropdowns = document.getElementsByClassName("paraf");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

      
    