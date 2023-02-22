
import { storageService } from './async-storage.service.js'

export const locService = {
    getLocs,
    addPlace,
    query
}

const STORAGE_KEY = 'placessDB'
var gFilterBy = { name: '', creatAt: 0 }

function query() {
    // return axios.get()
    return storageService.query(STORAGE_KEY)
        .then(locs => {
            if (gFilterBy.txt) {
                const regex = new RegExp(gFilterBy.name, 'i')
                locs = locs.filter(loc => regex.test(loc.name))
            }
            if (gFilterBy.creatAt) {
                locs = locs.filter(loc => loc.creatAt >= gFilterBy.creatAt)
            }
            return locs
        })
}



const locs = [
    { name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
    { name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs)
        }, 2000)
    })
}






function _creatPlace(lat, lng, name) {
    return  {
        // id: _makeId(),
        lat,
        lng,
        name,
        creatAt: Date.now(),
        // updatedAt: getDate(),
    }



}


function addPlace({ lat, lng }, name) {

    const place = _creatPlace(lat, lng, name)

    storageService.post(STORAGE_KEY, place)
}