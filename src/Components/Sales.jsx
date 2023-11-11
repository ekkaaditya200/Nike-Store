import PropTypes from 'prop-types'
import { Title, Item } from './index'
const Sales = ({ endpoint:{title,items} }) => {
    // console.log(endpoint);
    return (
        <>
            <div>
                <Title title={title} />
                <div>
                    {items?.map((item,index)=>{
                        return <Item key={index}
                        {...item}/>
                    })}
                </div>
            </div>
        </>
    )
}

Sales.propTypes = {
    endpoint: PropTypes.string.isRequired
};

export default Sales
