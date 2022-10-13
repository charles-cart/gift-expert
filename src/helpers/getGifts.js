export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZGRGOhHunCY4klrODAmuzLrzAKZqK8Xo&limit=10&q=${category}`;
    const req = await fetch(url);
    const { data } = await req.json();

    const gifts = data.map(gift => ({
        id: gift.id,
        title: gift.title,
        url: gift.images.downsized_medium.url,
    }))

    console.log(gifts);

    return gifts;
}