// Animate skill bars
const bars = document.querySelectorAll('.bar div');
let animated = false;

window.addEventListener('scroll', () => {
    const skillSection = document.getElementById('skills');
    const top = skillSection.getBoundingClientRect().top;

    if (top < window.innerHeight && !animated) {
        bars.forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
        });
        animated = true;
    }
});

// GitHub Projects
const grid = document.getElementById('projectGrid');
const username = "johnvherwincalma07"; // Your GitHub username

fetch(`https://api.github.com/users/${username}/repos`)
.then(res => res.json())
.then(repos => {
    repos.slice(0,6).forEach((repo, i) => {
        grid.innerHTML += `
            <div class="project-card" onclick="openModal('${repo.name}','${repo.description || 'No description'}','project${i+1}.jpg')">
                <h3>${repo.name}</h3>
                <p>${repo.description || 'No description available'}</p>
            </div>
        `;
    });
});

// Modal
function openModal(title, desc, img) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalImg').src = 'assets/' + img;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
