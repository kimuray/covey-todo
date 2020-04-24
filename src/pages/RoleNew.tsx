import React from 'react'
import { Button } from 'components/Button'
import { TextField } from 'components/TextField';

export const RoleNew: React.FC = () => (
  <>
    <h1>あなたの役割を教えてね♪</h1>
    <TextField type="text" />
    <Button label="追加" onClick={() => console.log("click")} />
  </>
)
