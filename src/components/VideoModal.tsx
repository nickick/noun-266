import React, { Dispatch, SetStateAction } from 'react'
import Modal from './Modal'

const VideoModal = ({
  open,
  setOpen
}: {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className='pb-[62.5%] h-screen w-screen sm:w-full sm:h-auto'>
        <div className='w-full h-full absolute'>
          <iframe src="https://player.vimeo.com/video/794163156?h=db24612c0a&color=eaeae5&title=0&byline=0&portrait=0&autoplay=1&loop=1&playsinline=1"
            width="100%" height="100%"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </Modal>
  )
}

export default VideoModal