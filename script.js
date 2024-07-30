document.addEventListener('DOMContentLoaded', () => {
    console.log("Game started");
    const car = document.getElementById('car');
    const gameContainer = document.querySelector('.game-container');
    const carWidth = car.offsetWidth;
    const containerWidth = gameContainer.offsetWidth;
    const obstacle = document.getElementById('obstacle');
    let carLeft = 175;
    let obstacleTop = -100;
    let gameOver = false;
    function moveCar(event) {
        if (gameOver) return;
        switch(event.key) {
            case 'ArrowLeft':
                if (carLeft > 0) {
                    carLeft -= 10;
                    car.style.left = `${carLeft}px`;
                }
                break;
            case 'ArrowRight':
                if (carLeft < containerWidth - carWidth) {
                    carLeft += 10;
                    car.style.left = `${carLeft}px`;
                }
                break;
        }
    }
    function moveObstacle() {
        if (gameOver) return;
        obstacleTop += 5;
        if (obstacleTop > 600) {
            obstacleTop = -100;
            obstacle.style.left = `${Math.floor(Math.random() * (containerWidth - carWidth))}px`;
        }
        obstacle.style.top = `${obstacleTop}px`;
        if (
            obstacleTop + 100 > 600 - 100 &&
            obstacleTop < 600 &&
            carLeft < parseInt(obstacle.style.left) + carWidth &&
            carLeft + carWidth > parseInt(obstacle.style.left)
        ) {
            alert('Game Over!');
            gameOver = true;
        }
        requestAnimationFrame(moveObstacle);
    }
    document.addEventListener('keydown', moveCar);
    requestAnimationFrame(moveObstacle);
});
