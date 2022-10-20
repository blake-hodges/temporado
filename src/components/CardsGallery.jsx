import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';


const data = [
    {
        img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        destination: "Brazil"
    },
    {
        img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        destination: "China"
    },
    {
        img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        destination: "Australia"
    },
    {
        img: "https://images.unsplash.com/photo-1548214649-9b8570c50f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vbnRyZWFsJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        destination: "Canada"
    },
    {
        img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        destination: "Portugal"
    },
    {
        img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        destination: "Spain"
    },
    {
        img: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        destination: "Turkey"
    },
    {
        img: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YWlpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        destination: "United States"
    },
    {
        img: "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZyUyMGtvbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        destination: "Hong Kong"
    }

]


function CardsGallery() {
    const CardsList = data.map((item, index) => (
        <Link to={`/properties/?country=${item.destination}&market=All`}>
            <Card background={item.img} caption={item.destination} key={index} />
        </Link>
    ))
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CardsList}
        </div>
    )
}

export default CardsGallery