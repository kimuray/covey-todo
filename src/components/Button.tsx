import React from 'react'

type PropsType = {
  label: string
  onClick: () => void
}

export const Button: React.FC<PropsType> = ({ label, onClick }) => (
  <button onClick={onClick}>
    {label}
  </button>
)
