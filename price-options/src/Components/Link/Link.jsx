import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-violet-600 px-6 py-2 rounded-lg md:text-xl md:font-semibold">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route : PropTypes.object
}

export default Link;