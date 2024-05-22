import { useEffect, useState } from "react"
import { useParams } from "react-router";

const UpdateItem = () => {
    const { id } = useParams()
    const [item, setItem] = useState({});
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
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
        getItem()
        console.log(item)
    }, [])

    const updateItem = async () => {
        const res = await fetch(`http://localhost:3000/item/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json();
        if (data.msg == 'Item created') {
            setSuccess(true)
        } else {
            setSuccess(false)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handlePost = (e) => {
        e.preventDefault();
        updateItem();
    }

    if (!loaded) {
        return (
            <>
                <p>Loading item...</p>
            </>
        )
    }

    return (
        <>
            <form className="form">
                <div className="field">
                    <label className="label">Jméno</label>
                    <div className="control">
                        <input required name="name" className="input" type="text" placeholder={item.result[0].name} onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Cena</label>
                    <div className="control">
                        <input required name="price" className="input" type="number" placeholder={item.result[0].price} onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Obrázek (url)</label>
                    <div className="control">
                        <input required name="image" className="input" type="text" placeholder="Obrázek" onChange={e => handleChange(e)} />
                    </div>
                </div>

                {success ? <p className='has-text-success'>Úspěch!</p> : ''}

                <button className='button' onClick={handlePost}>
                    Přidat
                </button>
            </form>
        </>
    )
}

export default UpdateItem