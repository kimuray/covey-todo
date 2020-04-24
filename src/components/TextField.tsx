import React from "react"

type PropsType = {
  type: string
  onChange?: () => void
}

export const TextField: React.FC<PropsType> = ({ type, onChange }) => (
  <input
    type={type}
    onChange={onChange}
  />
)
