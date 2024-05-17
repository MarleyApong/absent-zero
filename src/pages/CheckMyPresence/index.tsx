import { Scanner } from '@yudiel/react-qr-scanner';



const CheckMyPresence = () => {
    return (
        <div className=" w-64">
            <Scanner
                onResult={(text, result) => console.log(text, result)}
                onError={(error) => console.log(error?.message)}
            />
        </div>
    );
};

export default CheckMyPresence