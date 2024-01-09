const gridContainer = document.querySelector('.grid-container');
const promptBtn = document.querySelector('.prompt-btn');

promptBtn.addEventListener('click', () => {
	gridContainer.innerHTML = '';
	let userInput = prompt('How many squares per side? (50 max!)');
	boxCalculator(userInput);
});

const boxCreator = (num) => {
	let size = 400 / num;
	const pixel = document.createElement('div');
	pixel.classList = 'pixel';
	pixel.style.width = `${size}px`;
	pixel.style.height = `${size}px`;

	gridContainer.appendChild(pixel);

	pixel.addEventListener('mouseenter', () => {
		pixel.style.backgroundColor = 'yellow';
	});

	pixel.addEventListener('mouseleave', () => {
		pixel.style.backgroundColor = 'black';
		pixel.style.transition = '1s';
	});
};

const boxCalculator = (num) => {
	totalCubes = num * num;
	for (let i = 0; i < totalCubes; i++) {
		boxCreator(num);
	}
};
