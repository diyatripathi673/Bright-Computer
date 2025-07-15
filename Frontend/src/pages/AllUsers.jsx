import React, { useEffect } from 'react'
import { SummaryApi } from '../common/common'

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([])
    const fetchUsers = async () => {
        const fetchData = await fetch(SummaryApi.AllUsers.url,{
            method: SummaryApi.AllUsers.method,
            credentials: 'include'
        })
        const dataResponse = await fetchData.json()
        console.log(dataResponse)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
  return (
    <div>
    AllUsers
      
    </div>
  )
}

export default AllUsers
