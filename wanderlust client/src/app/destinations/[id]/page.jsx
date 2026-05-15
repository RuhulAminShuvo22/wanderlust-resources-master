import Image from "next/image";


const DestinationDetailsPage = async({params}) => {

    const {id} = await params
    
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    //console.log(destination)

    const {imageUrl, price, destinationName, duration, country } = destination;




    return (
        <div className="max-w-7xl mx-auto">
            <h2>This is Destination Details Page</h2>


            <Image
                alt={destinationName}
                src={imageUrl}
                height={500}
                width={800}
            >


            </Image>



        </div>
    );
};

export default DestinationDetailsPage;