

export const storageService = {
    post,   // Create
    get,    // Read
    put,    // Update
    remove, // Delete
    query,  // List 
}

function query(entityType, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(entities)
        }, delay)
    })
}