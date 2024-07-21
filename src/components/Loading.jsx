import React from 'react'
import { Box, CircularProgress } from '@mui/material'
function Loading({loading}) {
  return (
    loading && <div className='  inset-0 backdrop-blur-[1px] flex justify-center items-center fixed z-20 '>
      <Box sx={{ display: 'flex'  }}>
        <CircularProgress style={{ color: '#006854' }} />
      </Box> 
    </div>
  )
}

export default Loading