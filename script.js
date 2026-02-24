 * Функция для расчета веса на выбранной планете
 */
function calculate() {
    // Получаем элементы DOM
    const nameInput = document.getElementById('nameInput');
    const weightInput = document.getElementById('weightInput');
    const planetSelect = document.getElementById('planetSelect');
    const resultDiv = document.getElementById('result');

    const name = nameInput.value.trim();
    const weight = parseFloat(weightInput.value);
    const gravity = parseFloat(planetSelect.value);
    const planetName = planetSelect.options[planetSelect.selectedIndex].text;

    // Сброс стилей результата
    resultDiv.classList.remove('error-msg');
    resultDiv.style.display = "none";

    // Проверка на корректность введенных данных
    if (name === "" || isNaN(weight) || weight <= 0) {
        resultDiv.innerHTML = "Пожалуйста, введите корректное имя и вес!";
        resultDiv.classList.add('error-msg');
        resultDiv.style.display = "block";
        return;
    }

    // Математический расчет
    const finalWeight = weight * gravity;

    // Формирование и вывод результата
    resultDiv.innerHTML = `<strong>${name}</strong>, your weight on <strong>${planetName}</strong> is <strong>${finalWeight.toFixed(2)} kg</strong>!`;
    resultDiv.style.display = "block";
}

// Назначаем обработчик события на кнопку при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('calculateBtn');
    if (btn) {
        btn.addEventListener('click', calculate);
    }
});