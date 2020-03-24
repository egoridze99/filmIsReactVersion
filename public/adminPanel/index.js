class sqlManager {
    constructor() {
        this.sales = undefined;
    };

    initSalesArray() {
        const url = '../php/getSales.php';
        const options = {
            method: 'GET'
        };

        return fetch(url, options)
                .then (res => res.json())
                .then (res => {
                    this.sales = res;
                });
    };

    addSale(title, text) {
       const url = '../php/addSale.php';
       const options = {
            method : 'POST',
            body : `title=${title}&text=${text}`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
       }

       fetch(url, options)
            .then(res => res.text())
            .then(res => console.log(res))
            .then(fillUpSaleBlock())
            .catch(err => console.error(err))
    }

    deleteSale() {
        const url = '../php/deleteSale.php';
        const options = {
            method : 'POST',
            body : `id=${this.dataset.id}`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        };

        console.log(options);

        fetch(url, options)
            .then(res => res.text())
            .then(res => console.log(res))
            .then(fillUpSaleBlock())
            .catch(err => console.error(err))
    }
};

class modalWindowManager {
    constructor(saleManager) {
        this.initClose();
        this.initSubmit(saleManager);
    }

    openModal() {
        const modal = document.querySelector('.modal');
        modal.style.display = 'flex';
    }

    initClose() {
        const close = document.querySelector('.close')
            .addEventListener('click', this.closeWindow);
    }

    initSubmit(saleManager) {
        const submit = document.querySelector('.success');
        const titleInput = document.querySelector('.modal__window input');
        const textarea = document.querySelector('.modal__window textarea');

        submit.addEventListener('click', () => {
            const title = titleInput.value;
            const text = textarea.value;

            saleManager.addSale(title, text);

            this.closeWindow();
        })
    }

    closeWindow() {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }
}

function initAddSaleButton() {
    const windowManager = new modalWindowManager(new sqlManager());

    const button = document.querySelector('.wrapper__addSale')
        .addEventListener('click', () => {
            windowManager.openModal();
        });
}

function fillUpSaleBlock() {
    const saleManager = new sqlManager();
    let sales = [];

    const saleBlock = document.querySelector('.wrapper__sale-block');
    saleBlock.innerHTML = '';

    saleManager.initSalesArray()
        .then (() => sales = saleManager.sales)
        .then(() => {
            for (let item of sales) {
                const container = document.createElement('div');
                container.classList.add('sale-block__container');
        
                const title = document.createElement('h3');
                title.classList.add('container__title');
                title.textContent = item.title;
        
                const text = document.createElement('p');
                text.classList.add('container__text');
                text.textContent = item.text;
                
                const deleteButton = document.createElement('p');
                deleteButton.classList.add('container__delete');
                deleteButton.dataset.id = item.id;
                deleteButton.textContent = 'Удалить запись';
                deleteButton.addEventListener('click', saleManager.deleteSale)

                container.appendChild(title);
                container.appendChild(text);
                container.appendChild(deleteButton);

                saleBlock.appendChild(container);
            }
        })
};

fillUpSaleBlock();
initAddSaleButton();