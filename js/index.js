

function getCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => showCategories(data.categories))
    .catch(err => console.error('error happend', err))
}

getCategories()


const showCategories = (data) =>{

const categoryContainer = document.getElementById('category-container');

    // for(const item of data){
        
    //     const button = document.createElement('button');
    //     button.classList = 'btn';
    //     button.innerText = item.category;

    //     categoryContainer.appendChild(button)
    // }

    data.forEach((item) => {
        console.log(item)

        // create button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        categoryContainer.append(button)
    });
}