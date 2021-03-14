import {useState} from 'react'
import classes from './Pagination.module.css'
import Button from "../button/Button";

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={classes.selectedPage}>

            {portionNumber > 1 && <Button width={'100px'} height={'30px'} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</Button>}
            <div className={classes.buttonZone}>
                {
                    pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {
                            return <Button width={'30px'} height={'30px'} className={currentPage === p && classes.active}
                                           onClick={() => {
                                               onPageChanged(p);
                                           }}>{p}</Button>
                        })
                }
            </div>

            {portionCount > portionNumber && <Button width={'100px'} height={'30px'} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</Button>}

        </div>

    )
};

export default Pagination