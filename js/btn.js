

const containers = document.querySelector('.block1_body')

// FavBtn

function favFunc(id){
    const players = JSON.parse(localStorage.getItem('players'))
    const addFav = players.map(item => {
        if(item.id === id){
            return {
                ...item,
                fav: true
            }
        }else{
            return item
        }
    })
    localStorage.setItem('players' , JSON.stringify(addFav))
}

// UnFavBtn

function unfavFunc(id){
    const players = JSON.parse(localStorage.getItem('players'))
    const addFav = players.map(item => {
        if(item.id === id){
            return {
                ...item,
                unfav: true
            }
        }else{
            return item
        }
    })
    localStorage.setItem('players' , JSON.stringify(addFav))
}

const filter_player = document.querySelector('.filter_player')
filter_player.addEventListener('change' , e => {
    e.preventDefault();

    const value = e.target.value
    if(value === 'All'){
        function showCards(arr){
            const template = arr.map(({nickname , image , country , team , role , id}) => {
                return `  <div class="block1_inner">
                <div class="block1_title">
                    <h2>${nickname}</h2>
                </div>
                <div class="block1_picture" style="background: url('${image}') center / cover"></div>
                <div class='block1_content'>
                    <ul>
                        <li>${country}</li>
                        <li>${team}</li>
                        <li>${role}</li>
                    </ul>
        
                    <div>
                        <button onclick='favFunc(${id})'><i class="far fa-thumbs-up allBtn"></i></button>
                        <button onclick='unfavFunc(${id})'><i class="far fa-thumbs-down"></i></button>
                    </div>
                </div>
                
                <div class="centerBtn">
                    <button onclick="infoAppearBlock(${id})">more info</button>
                </div>
            </div>`
            }).join('')
            containers.innerHTML = template;
        }
        window.addEventListener('load' , showCards(getting));
    }else if(value === 'favorite'){
        const getNewPlayers = JSON.parse(localStorage.getItem('players'))
        const newTemplate = getNewPlayers.map(({nickname , image , country , team , role , id , fav}) => {
            if(fav === true){
                return `  <div class="block1_inner">
                    <div class="block1_title">
                        <h2>${nickname}</h2>
                    </div>
                    <div class="block1_picture" style="background: url('${image}') center / cover"></div>
                    <div class='block1_content'>
                        <ul>
                            <li>${country}</li>
                            <li>${team}</li>
                            <li>${role}</li>
                        </ul>
            
                        <div>
                            <button onclick='favFunc(${id})'><i class="far fa-thumbs-up favBtn"></i></button>
                            <button onclick='unfavFunc(${id})'><i class="far fa-thumbs-down"></i></button>
                        </div>
                    </div>
                    
                    <div class="centerBtn">
                        <button onclick="infoAppearBlock(${id})">more info</button>
                    </div>
                </div>`
            }
        }).join('')
        containers.innerHTML = newTemplate;
    }else if(value === 'unfavorite'){
        const getNewPlayers = JSON.parse(localStorage.getItem('players'))
        const newTemplate = getNewPlayers.map(({nickname , image , country , team , role , id , unfav}) => {
            if(unfav === true){
                return `  <div class="block1_inner">
                    <div class="block1_title">
                        <h2>${nickname}</h2>
                    </div>
                    <div class="block1_picture" style="background: url('${image}') center / cover"></div>
                    <div class='block1_content'>
                        <ul>
                            <li>${country}</li>
                            <li>${team}</li>
                            <li>${role}</li>
                        </ul>
            
                        <div>
                            <button onclick='favFunc(${id})'><i class="far fa-thumbs-up"></i></button>
                            <button onclick='unfavFunc(${id})'><i class="far fa-thumbs-down unfavBtn"></i></button>
                        </div>
                    </div>
                    
                    <div class="centerBtn">
                        <button onclick="infoAppearBlock(${id})">more info</button>
                    </div>
                </div>`
            }
        }).join('')
        containers.innerHTML = newTemplate;
    }
})