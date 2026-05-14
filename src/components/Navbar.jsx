import Image from "next/image";


const Navbar = () => {
    return (
        <nav className="flex justify-between bg-white p-5">
            <ul className="flex gap-5">
                <li><link  href={'/'} />Home</li>
                <li><link  href={'/destinations'} />Destinations</li>
                <li><link  href={'/my-bookings'} />My-bookings</li>
                
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'}
                height={150}
                width={150}
                alt="logo"
                ></Image>
            </div>

            <ul className="flex gap-5 bg-white p-5">
                <li><link  href={'/profile'} />Profile</li>
                <li><link  href={'/login'} />Login</li>
                <li><link  href={'/signup'} />Sign-Up</li>
                
            </ul>
        </nav>
    );
};

export default Navbar;