import {format} from 'date-fns';

export const PostDate = ({dateTime}) => {

    const formatDate = (date) => new Date(date).toLocaleDateString();

    // const parsedDate = new Date(dateTime);

    // const formattedDate = format(parsedDate, 'dd/MM/yyyy HH:mm:ss');
    const formattedDate = formatDate(dateTime);

    return (
        <div className='text-gray-500'>
            {formattedDate}
        </div>
    )
}