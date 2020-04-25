import React from 'react'
import { RoleForm } from 'components/Role/Form'
import { RoleList } from 'components/Role/List'

export const RoleNew: React.FC = () => (
  <>
    <h1>あなたの役割を教えてね♪</h1>
    <RoleList />
    <RoleForm />
  </>
)
