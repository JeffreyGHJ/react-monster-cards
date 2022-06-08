import skeletonAnim from './skeleton/SkeletonIdle.gif';
import skeletonWarriorIdle from './skeletonWarrior/SkeletonWarriorIdle.gif';
import flyingEyeIdle from './flyingEye/FlyingEyeIdle.gif';
import goblinIdle from './goblin/GoblinIdle.gif';
import mushroomIdle from './mushroom/MushroomIdle.gif';
import wingedDemonIdle from './wingedDemon/winged-demon-idle.gif';

const CardDetails = {
    monsters: [
        {
            name: 'Skeleton',
            alt: 'An enemy skeleton',
            info: 'An enemy skeleton',
            health: 5,
            portraitIdle: skeletonAnim,
            //customHeight: '104px',
        },
        {
            name: 'Mushroom',
            alt: 'An evil mushroom monster',
            info: 'An evil little mushroom',
            health: 5,
            portraitIdle: mushroomIdle,
            //customHeight: '86px',
        },
        {
            name: 'Flying Eye',
            alt: 'An eyeball with wings and sharp teeth',
            info: 'A flying eyeball',
            health: 5,
            portraitIdle: flyingEyeIdle,
            //customHeight: '86px',
        },
        {
            name: 'Goblin',
            alt: 'A little green goblin',
            info: 'A little green goblin',
            health: 6,
            portraitIdle: goblinIdle,
            //customHeight: '86px',
        },
        {
            name: 'Skeleton Warrior',
            alt: 'A formidable enemy skeleton',
            info: 'A formidable enemy skeleton',
            health: 8,
            portraitIdle: skeletonWarriorIdle,
            //customHeight: '168px',
        },
        {
            name: 'Winged Demon',
            alt: 'A powerful skeletal demon with monstrous wings',
            info: 'A powerful skeletal demon with monstrous wings',
            health: 20,
            portraitIdle: wingedDemonIdle,
            //customHeight: '160px',
        }
    ],
}

export default CardDetails;