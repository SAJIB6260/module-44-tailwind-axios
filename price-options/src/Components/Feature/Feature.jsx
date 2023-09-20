import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex'>
                <AiFillCheckCircle className='text-green-400 text-lg mr-3'>

                </AiFillCheckCircle>
                {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature : PropTypes.string
}

export default Feature;