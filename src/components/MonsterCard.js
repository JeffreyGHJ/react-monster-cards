import classes from './MonsterCard.module.css';

const MonsterCard = props => {

    // STYLING
    const flipCard = `${classes.card} ${classes['flip-inner']}`;
    const cardPortrait = `${classes.container} ${classes['monster-portrait']}`;
    const cardInfo = `${classes.container} ${classes['monster-info']}`;
    const cardStatus = `${classes.container} ${classes['monster-status']}`

    // DATA
    const monster = props.monster;
    const customHeight = {height: monster.customHeight};

    return (
        <div className={classes['flip-base']}>
            <div className={flipCard}>
                <section className={classes['card-front']}>

                    <h2>{monster.name}</h2>
                    <div className={cardPortrait} >
                        <img src={monster.portraitIdle} alt={monster.alt} style={customHeight}></img>
                    </div>

                    <div className={cardInfo}>
                        <h3>{monster.info}</h3>
                    </div>

                    <div className={cardStatus}>
                        <h3>HP: {monster.health}</h3>
                        <div className={classes.healthbar}>
                            <div className={classes.healthbar__value} ></div>
                        </div>
                    </div>
                </section>

                <section className={classes['card-back']}>

                </section>
            </div>
        </div>
    );

}

export default MonsterCard;