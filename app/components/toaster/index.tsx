'use client'

import { Toaster as ToasterProvider } from 'react-hot-toast'

export const Toaster = () => {
    return (
        <ToasterProvider
            position='bottom-center'
            toastOptions={{
                success: {
                    style: {
                        background: '#facc15',
                        color: '#fff'
                    },
                    iconTheme: {
                        primary: '#fff',
                        secondary: '#facc15'
                    },
                },
                error: {
                    style: {
                        background: '#ef4444',
                        color: '#fff'
                    },
                    iconTheme: {
                        primary: '#fff',
                        secondary: '#ef4444'
                    },
                },
            }}
        />
    )
}