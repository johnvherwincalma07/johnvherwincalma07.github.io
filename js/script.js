// Animate skill bars
const skills = document.querySelectorAll('.skill-fill');
window.addEventListener('scroll', () => {
    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(skillTop < windowHeight - 50){
            skill.style.width = skill.dataset.skill;
        }
    });
});

// Project Modals
const projects = {
    1: {
        title: "Project One",
        desc: "Description of project one...",
        img: "images/project1.png"
    },
    2: {
        title: "Project Two",
        desc: "Description of project two...",
        img: "images/project2.png"
    }
}

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');

function openModal(id){
    modal.style.display = 'flex';
    modalTitle.innerText = projects[id].title;
    modalDesc.innerText = projects[id].desc;
    modalImg.src = projects[id].img;
}

function closeModal(){
    modal.style.display = 'none';
}

// Close modal on outside click
window.onclick = function(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
}
