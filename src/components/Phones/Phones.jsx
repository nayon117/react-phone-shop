import PropTypes from 'prop-types'
import PhonesCard from './PhonesCard';

const Phones = ({ phones }) => {
    
    return (
        <div className="py-10 text-center">
            <h2 className="text-3xl font-semibold">All categories phones</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                    phones?.map(phone => <PhonesCard
                        key={phone.id}
                        phone={phone}
                    ></PhonesCard>)
                }
            </div>
        </div>
    );
};

Phones.propTypes = {
    phones:PropTypes.array
}
export default Phones;