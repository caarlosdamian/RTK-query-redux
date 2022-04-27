import React from 'react'
import { useContactQuery } from '../services/api'

interface Props {
    id: number
}

export const ContactDetails = ({ id }: Props) => {
    const { isLoading, data } = useContactQuery(id)
    return (
        <div>
            {isLoading ? <span>Loading...</span> : <pre>{JSON.stringify(data)}</pre>}
    <button >Delete Contact</button>
    <button >Update Contact</button>
        </div>
    )
}
