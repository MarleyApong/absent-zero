import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

const CheckMyPresence = () => {
    const [textScan, setTextScan] = useState<string>('')
    const [resultScan, setResultScan] = useState<object>({})
    console.log(resultScan)
    
    return (
        <div className={`flex justify-center h-full overflow-hidden`}>
            <div className="w-64 text-center mt-8">
                <h1 className='mb-4 text-4xl font-extrabold'>Marquer ma présence</h1>
                <p className='mb-3'>Veuillez scanner le code QR afin de marquer votre présence</p>
                <Scanner
                    onResult={(text, result) => {
                        setTextScan(text)   
                        setResultScan(result)   
                    }}
                    onError={(error) => console.log(error?.message)}
                />
                {textScan && <div className='p-2 bg-slate-300'>Resultat: {textScan}</div>}
            </div>
        </div>
    )
}

export default CheckMyPresence