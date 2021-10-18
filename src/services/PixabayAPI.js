function fetchImage(name, page = 1 ) {
    return (
         fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=23101905-f5de468dd217ea275d2e77ee2&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
    )
}

const api = {
    fetchImage,
}

export default api;