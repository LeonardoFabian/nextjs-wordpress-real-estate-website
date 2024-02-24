import {format} from 'date-fns';

export const PostDate = ({dateTime}) => {

    const parsedDate = new Date(dateTime);

    const formattedDate = format(parsedDate, 'dd/MM/yyyy HH:mm:ss');

    return (
        <div className='text-gray-500'>
            {formattedDate}
        </div>
    )
}