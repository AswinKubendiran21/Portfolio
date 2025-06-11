// HOME JS
var typed = new Typed(".text", {
        strings: ["frontend developer","Aeronautical Engineer","web developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });
// PROJECT JS(Switching between all, it and aero)
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});

//HOME JS(for navbar)
const toggleButton = document.getElementById('menu-toggle');
        const navBar = document.getElementById('navbar');

        toggleButton.addEventListener('click', () => {
            navBar.classList.toggle('active');
        });

// PROJECT JS(popup the details when click the project)
function openModal1() {
      document.getElementById("modalOverlay1").style.display = "flex";
    }

    function closeModal1() {
      document.getElementById("modalOverlay1").style.display = "none";
    }
function openModal2(){
      document.getElementById("modalOverlay2").style.display = "flex";
    }

    function closeModal2() {
      document.getElementById("modalOverlay2").style.display = "none";
    }

//SERVICE JS(popup the service details when click the service)
function serviceopen1() {
      document.getElementById("modalOverlay3").style.display = "flex";
    }

    function serviceclose1() {
      document.getElementById("modalOverlay3").style.display = "none";
    }
function serviceopen2() {
      document.getElementById("modalOverlay4").style.display = "flex";
    }

    function serviceclose2() {
      document.getElementById("modalOverlay4").style.display = "none";
    }
function serviceopen3() {
      document.getElementById("modalOverlay5").style.display = "flex";
    }

    function serviceclose3() {
      document.getElementById("modalOverlay5").style.display = "none";
    }