import CryptoJS from 'crypto-js'
import { KEY_CRPTO } from '@/constants'

export const encryptData = (data: any) => {    
    // Convert data to JSON string if it's an object
    const dataString = JSON.stringify(data)
    console.log('dataString',dataString);
    

    // Encrypt the data string
    const ciphertext = CryptoJS.AES.encrypt(dataString, KEY_CRPTO).toString()

    // Return URL-safe version of the encrypted data
    return encodeURIComponent(ciphertext)
}

export const decryptData = (data: any) => {
    let decryptedData = ''
    if (data) {
        const bytes = CryptoJS.AES.decrypt(data, KEY_CRPTO)
        decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    }
    return JSON.parse(decryptedData)
}
