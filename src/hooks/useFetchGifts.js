import { useEffect, useState } from "react";

import { getGifts } from "../helpers/getGifts";

export const useFetchGifts = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true)

    const getData = async (category) => {
        const imgs = await getGifts(category);
        setImages(imgs);
        setIsloading(false);
    }

    useEffect(() => { getData(category) }, []);

    return [images, isLoading];
}
