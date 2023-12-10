import PropTypes from 'prop-types'
import { Title, Item } from './index'
const Sales = ({ ifExists, endpoint: { title, items } }) => {
    // console.log(endpoint);
    return (
        <>
            <div className='nike-container'>
                <Title title={title} />
                <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1':'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '}`}>
                    {items?.map((item, index) => {
                        return <Item key={index}
                            {...item} ifExists={ifExists}/>
                    })}
                </div>
            </div>
        </>
    )
}

Sales.propTypes = {
    endpoint: PropTypes.string.isRequired,
    ifExists: PropTypes.string.isRequired
};

export default Sales
