import { ShoppingBagIcon, StarIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
const Item = ({ title, color, shadow, text, img, btn, rating, price }) => {
    return (
        <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-normal`}>
            <div className='grid items-center justify-items-center'>
                <h1>{title}</h1>
                <p>{text}</p>
                <div>
                    <div><h1>{price}</h1></div>
                    <div><StarIcon
                        className='icon-style text-slate-900'
                    /><h1>{rating}</h1></div>
                </div>
                <div>
                    <button type='button' className=''><ShoppingBagIcon
                        className='icon-style text-slate-900' /></button>
                    <button type='btn' className=''>{btn}</button>
                </div>
            </div>
            <div>
                <img
                    src={img}
                    alt='img/item-img'
                    className=''
                ></img>
            </div>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    shadow: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}

export default Item
