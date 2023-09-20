import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-violet-500 rounded-md p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-5xl text-center my-8'>{name}</h4>
            <div className='px-10 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-12 bg-green-500 py-2 w-full font-bold rounded-lg hover:bg-green-700'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option : PropTypes.object
}

export default PriceOption;