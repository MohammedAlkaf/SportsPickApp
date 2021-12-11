import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@mui/material'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', width: '100%', backgroundColor: '#FAFAFA', borderBottom: 'solid 1px lightgray', zIndex: '10', height:'50px'
        }}>
            <Button style={{ fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut