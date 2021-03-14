import React from 'react'
//                     String    Array of strings
const ShareButton = ({platform, hashtags}) => {
    return(
        <>
            { platform === 'facebook' ?
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/AnansiOmega&=TrashWarriors"
                onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                target="_blank">
                Share
                </a>
                :
                <a  className="twitter-share-button"
                    href="https://twitter.com/intent/tweet"
                    data-size="large"
                    data-text="Cleaning up New York City one bag a time"
                    data-url="https://github.com/AnansiOmega"
                    data-hashtags={hashtags?.join(',')}
                    data-related="twitterapi,twitter">
                    Tweet
                </a>

            }
        </>
    )
}

export default ShareButton