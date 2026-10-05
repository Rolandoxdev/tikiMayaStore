import { Box } from '@mui/material'
import { Leaf } from 'lucide-react'

interface EditorialVisualProps {
  height?: { xs: number; md: number }
}

export function EditorialVisual({ height = { xs: 320, md: 480 } }: EditorialVisualProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: height,
        backgroundColor: 'secondary.main',
        borderRadius: { xs: '16px', md: '24px' },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '40%',
          height: '60%',
          backgroundColor: 'rgba(35, 75, 77, 0.06)',
          borderRadius: '50% 40% 60% 50%',
          transform: 'rotate(-15deg)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '8%',
          width: '35%',
          height: '50%',
          backgroundColor: 'rgba(251, 191, 73, 0.15)',
          borderRadius: '60% 40% 50% 60%',
          transform: 'rotate(10deg)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          width: '25%',
          height: '40%',
          backgroundColor: 'rgba(35, 75, 77, 0.08)',
          borderRadius: '40% 60% 50% 50%',
          transform: 'rotate(5deg)',
        }}
      />
      <Leaf
        size={64}
        strokeWidth={1}
        style={{
          color: 'rgba(35, 75, 77, 0.2)',
          position: 'relative',
          zIndex: 1,
        }}
      />
    </Box>
  )
}
