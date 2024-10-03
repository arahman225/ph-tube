// Get videos 

const getVideos = async() =>{
    const url = "https://openapi.programming-hero.com/api/phero-tube/videos";
    const res = await fetch(url);
    const video = await res.json();
    showVideos(video.videos)
}

getVideos()


const showVideos = (video) =>{

    console.log(video)
    const videoContainer = document.getElementById('videos-container');
    for(const vid of video){
        console.log(vid)

        //create a card

        const card = document.createElement('div');
        card.innerHTML = `
        
        <figure class="h-[200px]">
            <img class="h-full w-full object-cover" src=${vid.thumbnail} />
        </figure>
        <div class="px-0 py-4">
            <div class="flex">
                <img class="h-10 w-10 rounded-full" src=${vid.authors[0].profile_picture}>
                <div class="ml-2">
                    <h1 class="font-Inter font-bold">${vid.title}</h1>
                <div class="flex items-center gap-3">
                    <p>${vid.authors[0].profile_name}</p>
                    <img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">
                </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
        
        `
        card.classList = 'card card-compact bg-base-100 w-96 shadow-xl'

        videoContainer.append(card)
    }
}

//profile_picture