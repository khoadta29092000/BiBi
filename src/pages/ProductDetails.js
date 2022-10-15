import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/Products/Header';
import Content from 'components/ProductDetails/Content';



export default function ProductDetails() {
    return (
        <>
            <div className="absolute mb-20 bg-black w-full z-20">
                <DefaultNavbar />
            </div>
            <main className=''>
            
             <Content />
            </main>
            <DefaultFooter className="mt-20"/>
        </>
    );
}
