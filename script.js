const cards = document.querySelectorAll(".ameaca-card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

function openModal(title, text) {
	modalTitle.textContent = title;
	modalText.textContent = text;
	modal.classList.add("open");
	modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
	modal.classList.remove("open");
	modal.setAttribute("aria-hidden", "true");
}

cards.forEach((card) => {
	card.addEventListener("click", () => {
		const title = card.dataset.modalTitle;
		const text = card.dataset.modalText;
		openModal(title, text);
	});
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
	if (event.target === modal) {
		closeModal();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && modal.classList.contains("open")) {
		closeModal();
	}
});
