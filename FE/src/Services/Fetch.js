async function postData(endpoint,obj) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        return await peticion.json();
    } catch (error) {
        console.error('Error en postData:', error);
    }
}

async function getData(endpoint) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await peticion.json();
    } catch (error) {
        console.error('Error en postData:', error);
    }
}

async function patchData(endpoint, obj) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        return await peticion.json();
    } catch (error) {
        console.error('Error en postData:', error);
    }
}


async function deleteData(endpoint, obj) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        return await peticion.json();
    } catch (error) {
        console.error('Error en postData:', error);
    }
}
export { postData, getData, patchData, deleteData };