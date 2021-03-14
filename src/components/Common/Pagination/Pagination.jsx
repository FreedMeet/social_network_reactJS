import {useState} from 'react'
import classes from './Pagination.module.css'

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

            {portionNumber > 1 && <button className={classes.paginationButtons} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
            <div className={classes.buttonZone}>
                {
                    pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {
                            return <button className={currentPage === p && classes.active}
                                           onClick={() => {
                                               onPageChanged(p);
                                           }}>{p}</button>
                        })
                }
            </div>

            {portionCount > portionNumber && <button className={classes.paginationButtons} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}

        </div>

    )
};

export default Pagination