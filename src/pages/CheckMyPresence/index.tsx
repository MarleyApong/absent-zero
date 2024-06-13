import { Scanner } from '@yudiel/react-qr-scanner';

const CheckMyPresence = () => {
    return (
        <div className={`flex justify-center h-full overflow-hidden`}>
            <div className="w-64 text-center mt-8">
                <h1 className='mb-4 text-4xl font-extrabold'>Marquer ma présence</h1>
                <p className='mb-3'>Veuillez scanner le code QR afin de marquer votre présence</p>
                <Scanner
                    onResult={(text, result) => console.log(text, result)}
                    onError={(error) => console.log(error?.message)}
                />
            </div>
        </div>
    )
}

export default CheckMyPresence