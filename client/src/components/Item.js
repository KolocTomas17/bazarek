import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Item = () => {
    const { id } = useParams()
    const [item, setItem] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getItem = async () => {
        const res = await fetch(`http://localhost:3000/item/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        });
        const data = await res.json();
        setItem(data);
        setLoaded(true);
    }

    useEffect(() => {
        getItem();
        console.log(item.result)
    }, [])

    if (!loaded)
        return (
            <>
                <p>Loading item...</p>
            </>
        )

    return (
        <>
            <div className='card'>
                <div class="card-image">
                    <figure class="image">
                        <img src={item.result[0].image} alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">

                        <div class="media-content">
                            <p class="title is-4">{item.result[0].name}</p>
                            <p class="subtitle is-6">{item.result[0].price} Kč</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item