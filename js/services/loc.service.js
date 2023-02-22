
import{storageService} from './async-storage.service.js'

export const locService = {
    getLocs,
    addLocation,
}

const STORAGE_KEY = 'locationsDB'

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






function _creatPlace(name, lat, lng) {
    return {
        id: _makeId(),
        lat,
        lng,
        name,
        creatAt: getDate(),
        updatedAt: getDate(),
    }



}


function addLocation(latlng){

//   const location= _creatPlace(name, lat, lng)

  storageService.post(STORAGE_KEY,latlng)
}