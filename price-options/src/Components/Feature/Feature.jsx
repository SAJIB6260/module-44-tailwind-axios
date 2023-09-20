import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center align-middle'>
                <div>
                <AiFillCheckCircle className='text-green-400 text-lg mr-3'>

</AiFillCheckCircle>
                </div>
                <div>
                {feature}
                </div>
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature : PropTypes.string
}

export default Feature;