import React from 'react'
import ProfilePic from './assets/images.jfif'
import {FacebookIcon, 
    FacebookShareButton,
    WhatsappIcon, 
    WhatsappShareButton, 
    LinkedinIcon, 
    LinkedinShareButton} from 'react-share'

const Profile = () => {
    const shareUrl = "https://www.walmart.com/"
  return (
    <div className="flex flex-col gap-2 my-4 items-center h-screen" >
        <div className="flex flex-col gap-4 xsm:px-4">
            <p className="text-xl font-bold">PROFILE</p>
            <img alt="profile-pic" src={ProfilePic} className="xsm:w-1/2"/>
            <div className="flex gap-4 xsm:flex-col">
                <p className="font-bold break-words">Name:</p>
                <p className="break-words">Kane Adams</p>
            </div>
            <div className="flex gap-4 xsm:flex-col">
                <p className="font-bold break-words">Username:</p>
                <p className="break-words">kane98</p>
            </div>
            <div className="flex gap-4 xsm:flex-col">
                <p className="font-bold break-words">Email:</p>
                <p className="break-words">adamskane@gmail.com</p>
            </div>
            <div className="flex gap-4 xsm:flex-col">
                <p className="font-bold break-words">City:</p>
                <p className="break-words">New York City</p>
            </div>
            <div className="flex gap-4">
                <FacebookShareButton url={shareUrl} className="rounded-full">
                    <FacebookIcon size={40}/>
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl} className="rounded-full">
                    <WhatsappIcon size={40}/>
                </WhatsappShareButton>
                <LinkedinShareButton url={shareUrl} className="rounded-full">
                    <LinkedinIcon size={40}/>
                </LinkedinShareButton>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187106.8823254637!2d-78.97444486718751!3d42.8824461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30a56f0fe7845%3A0x410df3e20449db0e!2sWalmart%20Supercenter!5e0!3m2!1sen!2set!4v1664713909231!5m2!1sen!2set" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>
    </div>
  )
}

export default Profile