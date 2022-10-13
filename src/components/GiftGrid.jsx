import { useEffect, useState } from "react";

import { GiftCard } from "./GiftCard";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GiftGrid = ({ category }) => {
    const [images, isLoading] = useFetchGifts(category);

    return (
        <>
            <h1>{ category }</h1>
            {isLoading && <h2>Cargando..</h2>}
            <div className="card-grid">
                { images.map(image => (<GiftCard key={ image.id } { ...image }/>)) }
            </div>
        </>
    )
}
