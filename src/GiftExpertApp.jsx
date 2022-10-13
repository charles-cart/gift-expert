import { AddCategory, GiftGrid } from './components';

import PropTypes from 'prop-types';
import { useState } from "react"

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['one puch']);

    const onAddCategory = (category) => {
        if (categories.includes(category)) return;
        setCategories([category, ...categories]);
    }

    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory onAddCategory={value => onAddCategory(value)} />

            { categories.map(category => <GiftGrid key={ category } category={ category }/>) }
        </>
    )
}

// GiftExpertApp.propTypes = {
//     categories: PropTypes.array
// }

// GiftExpertApp.defaultProps = {
//     categories: []
// }

// ZGRGOhHunCY4klrODAmuzLrzAKZqK8Xo