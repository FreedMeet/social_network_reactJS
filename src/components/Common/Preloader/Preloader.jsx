import preloader from '../../../assets/images/loader.svg';
import classes from './Preloader.module.css'

let Preloader = () => {
    return (
        <div className={classes.imageBlock}>
            <img src={preloader} />
        </div>
    )
}
export default Preloader