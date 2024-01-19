import Link from "next/link";


const Header = () => {
    return (
        <div className="header " >
                <header className="header_content center">
                    <Link className="logo" href='/' passHref>Ecommerce</Link>
                    <nav>
                        <Link href='/'>Home</Link>
                        <Link href='/products'>All products</Link>
                        <Link href='/categories'>Categories</Link>
                        <Link href='/account'>Account</Link>
                        <Link href='/cart'>Cart (0)</Link>
                    </nav>
                </header>
            
        </div>
    );
};


export default Header;
