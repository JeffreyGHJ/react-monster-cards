import classes from './MonsterCard.module.css';
import Image from 'next/image';

// STYLING
const flipCard = `${classes.card} ${classes['flip-inner']}`;
const cardPortrait = `${classes.container} ${classes['monster-portrait']}`;
const cardInfoBox = `${classes.container} ${classes['card-info-box']}`;
const cardStatus = `${classes.container} ${classes['monster-status']}`

const MonsterCard = props => {
    // DATA
    const monster = props.monster;
    //const customHeight = {height: monster.customHeight};
    const maxHealth = props.monster.maxHealth;

    const currentHealthPercent = () => {
        let percent = (monster.health / maxHealth) * 100;
        let result = percent + '%';
        return { width: result.toString() };
    }

    return (
        <div className={classes['flip-base']}>
            <div className={flipCard}>
                <div className={classes['card-front']}>

                    <div className={classes['card-title']} >
                        {monster.name}
                    </div>

                    <div className={classes['monster-portrait']} >
                        <Image src={monster.portraitIdle} alt={monster.alt} /* style={customHeight} */></Image>
                    </div>

                    <div className={classes['card-body']}>
                        <div className={classes['card-info-box']}>
                            <div className={classes['card-info']}>{monster.info}</div>
                        </div>

                        <div className={classes['monster-status']}>
                            <div className={classes['health-text']}>
                                HP: {monster.health}
                            </div>
                            <div className={classes.healthbar}>
                                <div className={classes.healthbar__value} style={currentHealthPercent()}></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={classes['card-back']}>
                    <div className={classes['card-back-design']}></div>
                </div>
            </div>
        </div>
    );

}

export default MonsterCard;