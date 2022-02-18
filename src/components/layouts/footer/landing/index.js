import React from 'react'
import styles from './styles.module.scss'

const LandingFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.textLogo}>
          <img className={styles.imageLogo} src='/images/logoBig.png' alt='logo_big' />
        </div>
        
        <div className={styles.centerWrapper}>
          <div className={styles.description}>
            Reach out across any of our social media channels to get more involved with the manifesto, web3 fashion & the open metaverse. ALL ENGINEERING AND ARCHITECTURE IS FORKED FROM THE DIGITALAX OPEN SOURCE PROTOCOL STACK.
          </div>

          <div className={[styles.dFlex, styles.iconsLine].join(' ')}>
            {/* <a href="https://www.facebook.com/digitalax1" target="_blank">
              <img
                src="/images/social-icons/facebook.svg"
                alt="facebook-icon"
                className={'facebook-icon'}
              />
            </a> */}
            <a href="https://www.tiktok.com/@digitalax?" target="_blank">
              <img
                src="/images/social-icons/tiktok.svg"
                alt="tiktok-icon"
                className={styles.tiktokIcon}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCOq_pNlxwn8laaTO1NG3YgQ" target="_blank">
              <img
                src="/images/social-icons/youtube.svg"
                alt="youtube-icon"
                className={styles.youtubeIcon}
              />
            </a>
            <a href="https://medium.com/@AU.DEO" target="_blank">
              <img
                src="/images/social-icons/medium.png"
                alt="medium-icon"
                className={styles.mediumIcon}
              />
            </a>
            <a href="https://mirror.xyz/0x886Bff470E239333fFA524e32796d489A7f33531" target="_blank">
              <img
                src="/images/social-icons/mirror.png"
                alt="mirror-icon"
                className={styles.mirrorIcon}
              />
            </a>
            <a href="https://twitter.com/au_deo" target="_blank">
              <img
                src="/images/social-icons/twitter.png"
                alt="twitter-icon"
                className={'twitter-icon'}
              />
            </a>
            {/* <a href="https://www.instagram.com/au.deo/" target="_blank">
              <img
                src="/images/social-icons/instagram.svg"
                alt="instagram-icon"
                className={'instagram-icon'}
              />
            </a> */}
            {/* <a href="https://www.linkedin.com/company/digitalax-digital-fashion/" target="_blank">
              <img
                src="/images/social-icons/linkedin.png"
                alt="linkedin-icon"
                className={styles.linkedinIcon}
              />
            </a> */}

            {/* <a href="https://www.twitch.tv/digitalax" target="_blank">
              <img
                src="/images/social-icons/twitch.svg"
                alt="twitch-icon"
                className={styles.twitchIcon}
              />
            </a> */}
            {/* <a href="https://discord.com/invite/Hfuta2BShk" target="_blank">
              <img
                src="/images/social-icons/discord.svg"
                alt="discord-icon"
                className={styles.discordIcon}
              />
            </a> */}
            {/* <a href="https://www.reddit.com/r/DIGITALAX/" target="_blank">
              <img
                src="/images/social-icons/reddit.svg"
                alt="reddit-icon"
                className="reddit-icon"
              />
            </a> */}
            {/* <a href="https://t.me/digitalaxannouncements" target="_blank">
              <img
                src="/images/social-icons/telegram.png"
                alt="telegram-icon-2"
                className={styles.mediumIcon}
              />
            </a> */}
          </div>

          <div className={[styles.dFlex, styles.aboutLine].join(' ')}>
            <a href="https://docs.au-deo.xyz/" target="_blank">
              SEE ALL DOCUMENTATION
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter
