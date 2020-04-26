import { useEffect } from 'react'
import db from 'db'
import { Role } from 'stateType/Role'
import { useDispatch } from 'react-redux';
import { setRoles } from 'slices/roleSlice';

export const useSelectRoles = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    db.table("roles").toArray().then((roles: Array<Role>) => {
      dispatch(setRoles(roles))
    })
  }, [])
}
