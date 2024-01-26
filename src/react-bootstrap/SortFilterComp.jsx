import Form from 'react-bootstrap/Form';

function SortFilterComp(props) {
    return (
        <Form.Select aria-label="" className='bg-transparent my-3' onChange={props.onChange}>
            {
                props.options.map((option,index) => (
                    <option key={index} value={option}>{option}</option>
                ))
            }
        </Form.Select>
    );
}

export default SortFilterComp;