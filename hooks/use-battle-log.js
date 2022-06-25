import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLogMessage, shrinkLog } from "../slices/game-slice";

const key = 0;

const useBattleLog = () => {
    const dispatch = useDispatch();

    /* useEffect(() => {
        if ( logMessages.length >= LOG_SIZE_LIMIT ) {
            console.log("log too big: " + logMessages.length);
            dispatch(shrinkLog());
        }
    }, [logMessages]); */

    const logMessage = (actionBy, actionType, actionValue) => {
        console.log("actionBy: " + actionBy + ", actionType: " + actionType + ", actionValue: " + actionValue + ", key: " + key);

        const message = {
            actionBy,
            actionType,
            actionValue,
            key: key++,
        };

        dispatch(addLogMessage(message));
    };

    return {
        logMessage,
    };
};

export default useBattleLog;