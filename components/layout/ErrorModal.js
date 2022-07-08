import { useSelector, useDispatch } from 'react-redux';
import classes from './ErrorModal.module.css';
import { setError } from '../../slices/error-modal-slice';

const ErrorModal = () => {
    const error = useSelector((state) => state.errorModal.error)
    const dispatch = useDispatch();

    function onConfirm(e) {
        e.stopPropagation();
        dispatch(setError(null));
    }

    function blockClick(e) {
        e.stopPropagation();
    }

    return (
        <>
            { error &&
                <div className={classes['backdrop']} onClick={onConfirm}>
                    <div className={classes['error-modal']} onClick={blockClick}>
                        <header className={classes['header']}>
                            <h2>{error.status + ' - ' + error.statusText}</h2>
                        </header>
                        <div className={classes['content']}>
                            <p>
                                {error.message}
                            </p>
                        </div>
                        <footer className={classes['actions']}>
                            <button onClick={onConfirm}>Okay</button>
                        </footer>
                    </div>
                </div>
            }
        </>
    );
}

export default ErrorModal;