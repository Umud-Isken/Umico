let cards = [
    {
        title: "TASTY CAKE",
        img :"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
        desk: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        title :"LOG CABIN",
        img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png",
        desk : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam"
    },
    {
        title :"CIRCUS TENT",
        img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png",
        desk: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam"
    },
    {
        title: "CONTROLLER",
        img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png",
        desk :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        title: "LOCKED SAFE",
        img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png",
        desk :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        title :"SUBMARIN",
        img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png",
        desk :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    }
]

document.querySelectorAll(".col-4 img").forEach((img, index) => {
    img.addEventListener("click", function() {
        const card = cards[index]

        let modalContent = `
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${card.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${card.img}" class="img-fluid" alt="${card.title}">
                    <p>${card.desk}</p>
                </div>
            </div>
        `;


        document.querySelector(".modal-dialog").innerHTML = modalContent;

        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    })
})