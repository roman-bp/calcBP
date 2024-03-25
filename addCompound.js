document.addEventListener('DOMContentLoaded', function () {
    const componentsBlock = document.querySelector('.components-block');
    let componentCount = 0; // Почнемо відлік компонентів з 0, оскільки він буде збільшений перед створенням першого компонента

    document.getElementById('addComponentButton').addEventListener('click', function () {
        componentCount++; // Збільшуємо лічильник компонентів
        const newComponentHTML = `
            <div class="card" id="component${componentCount}">
                <div class="component-header">
                    <span class="component-number">${componentCount}.</span>
                    <input type="text" placeholder="Назва компонента" class="component-name" name="componentName${componentCount}">
                </div>
                <div class="details">
                    <input type="number" placeholder="Ціна" name="componentPrice${componentCount}">
                    <input type="number" placeholder="Кількість частин" name="componentQuantity${componentCount}">
                </div>
            </div>
        `;
        componentsBlock.insertAdjacentHTML('beforeend', newComponentHTML); // Додаємо новий компонент
    });

    document.getElementById('removeComponentButton').addEventListener('click', function () {
        if (componentCount > 0) {
            const componentToRemove = document.getElementById(`component${componentCount}`);
            componentsBlock.removeChild(componentToRemove);
            componentCount--; // Зменшуємо лічильник компонентів
        }
    });
});
