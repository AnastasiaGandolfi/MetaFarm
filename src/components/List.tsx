import data from "./ListData.json"
import Dropdown from 'react-bootstrap/Dropdown';

interface ListProps {
    input: string;
}

function List(props: ListProps) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className='dropdown-menu-container'>
            <Dropdown.Menu className="dropdown-menu" style={{width: '350px'}} show>
                <Dropdown.Header>Preferiti:</Dropdown.Header>
                {filteredData.map((item) => (
                    <Dropdown.Item key={item.id}><img src="https://www.laminam.com/wp-content/uploads/2020/08/Collection-Bianco-Assoluto.jpg" alt='avatar'/>{item.text}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </div>
    )
}

export default List
