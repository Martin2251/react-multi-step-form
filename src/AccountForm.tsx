import React from 'react'

const AccountForm = () => {
  return (
    <>
          <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={e => updateFields({ password: e.target.value })}
      />
    
    </>
  )
}

export default AccountForm