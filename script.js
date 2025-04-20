function openMembershipForm() {
    const formSection = document.getElementById('membership-form');
    formSection.classList.toggle('hidden');
    if (!formSection.classList.contains('hidden')) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    const joinNowLinks = document.querySelectorAll(".join-now-link");
    const formSection = document.getElementById("membership-form");
    const planSelect = document.getElementById("plan");
  
    joinNowLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedPlan = link.getAttribute("data-plan");
  
        
        formSection.classList.remove("hidden");
        formSection.scrollIntoView({ behavior: "smooth" });
  
        
        if (planSelect) {
          planSelect.value = selectedPlan.toLowerCase(); 
        }
      });
    });
  });
  
