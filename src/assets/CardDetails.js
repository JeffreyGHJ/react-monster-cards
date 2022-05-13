import skeletonAnim from './skeleton/SkeletonIdle.gif';
import skeletonWarriorIdle from './skeletonWarrior/SkeletonWarriorIdle.gif';
import flyingEyeIdle from './flyingEye/FlyingEyeIdle.gif';
import goblinIdle from './goblin/GoblinIdle.gif';
import mushroomIdle from './mushroom/MushroomIdle.gif';

const CardDetails = {
    monsters: [
        {
            name: 'Skeleton',
            alt: 'An enemy skeleton',
            info: 'An enemy skeleton',
            health: 10,
            maxHealth: 10,
            portraitIdle: skeletonAnim,
            customHeight: '104px',
        },
        {
            name: 'Skeleton Warrior',
            alt: 'A formidable enemy skeleton',
            info: 'A formidable enemy skeleton',
            health: 6,
            maxHealth: 6,
            portraitIdle: skeletonWarriorIdle,
            customHeight: '168px',
        },
        {
            name: 'Flying Eye',
            alt: 'An eyeball with wings and sharp teeth',
            info: 'A flying eyeball',
            health: 3,
            maxHealth: 3,
            portraitIdle: flyingEyeIdle,
            customHeight: '86px',
        },
        {
            name: 'Goblin',
            alt: 'A little green goblin',
            info: 'A little green goblin',
            health: 3,
            maxHealth: 3,
            portraitIdle: goblinIdle,
            customHeight: '86px',
        },
        {
            name: 'Mushroom',
            alt: 'An evil mushroom monster',
            info: 'An evil little mushroom',
            health: 2,
            maxHealth: 2,
            portraitIdle: mushroomIdle,
            customHeight: '86px',
        }
    ],
}

export default CardDetails;