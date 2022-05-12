import skeletonAnim from './skeleton/SkeletonIdle.gif';
import skeletonWarriorIdle from './skeletonWarrior/SkeletonWarriorIdle.gif';
import flyingEyeIdle from './flyingEye/FlyingEyeIdle.gif';
import goblinIdle from './goblin/GoblinIdle.gif';
import mushroomIdle from './mushroom/MushroomIdle.gif';

const CardDetails = {
    monsters: {
        skeleton: {
            name: 'Skeleton',
            alt: 'An enemy skeleton',
            info: 'An enemy skeleton',
            health: 1,
            portraitIdle: skeletonAnim,
            customHeight: '104px',
        },
        skeletonWarrior: {
            name: 'Skeleton Warrior',
            alt: 'A formidable enemy skeleton',
            info: 'A formidable enemy skeleton',
            health: 6,
            portraitIdle: skeletonWarriorIdle,
            customHeight: '168px',
        },
        flyingEye: {
            name: 'Flying Eye',
            alt: 'An eyeball with wings and sharp teeth',
            info: 'A flying eyeball',
            health: 3,
            portraitIdle: flyingEyeIdle,
            customHeight: '86px',
        },
        goblin: {
            name: 'Goblin',
            alt: 'A little green goblin',
            info: 'A little green goblin',
            health: 3,
            portraitIdle: goblinIdle,
            customHeight: '86px',
        },
        mushroom: {
            name: 'Mushroom',
            alt: 'An evil mushroom monster',
            info: 'An evil little mushroom',
            health: 2,
            portraitIdle: mushroomIdle,
            customHeight: '86px',
        }
    },
}

export default CardDetails;