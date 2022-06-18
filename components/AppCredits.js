import classes from './AppCredits.module.css';
import Image from 'next/image';
import reactIcon from '../public/assets/icons/React-icon.png';
import firebaseLogo from '../public/assets/icons/Firebase-Logo.png';
import nextjsLogo from '../public/assets/icons/Nextjs-Logo.png';

const AppCredits = (props) => {
    return (
        <div className={classes['app-credits']}>
            <div className={classes['main-content']}>
                <div className={classes['credits-title']}>
                    <h2>Made With</h2>
                </div>
                <div className={classes['icon-bar']}>
                    <div className={classes['icon-entry']}>
                        <div className={classes['icon-box']}>
                            <div className={classes['icon']}>
                                <Image src={reactIcon} alt={'react'}></Image>
                            </div>
                        </div>
                        <div className={classes['icon-label']}>
                            React
                        </div>
                    </div>
                    <div className={classes['icon-entry']}>
                        <div className={classes['icon-box']}>
                            <div className={classes['icon']}>
                                <Image src={nextjsLogo} alt={'next.js'}></Image>
                            </div>
                        </div>
                        <div className={classes['icon-label']}>
                            Next.js
                        </div>
                    </div>
                    <div className={classes['icon-entry']}>
                        <div className={classes['icon-box']}>
                            <div className={classes['icon']}>
                                <Image src={firebaseLogo} alt={'firebase'}></Image>
                            </div>
                        </div>
                        <div className={classes['icon-label']}>
                            Firebase
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCredits;