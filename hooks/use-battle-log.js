import { useDispatch } from "react-redux";
import { addLogMessage } from "../slices/game-slice";

const key = 0;

const useBattleLog = () => {
    const dispatch = useDispatch();

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