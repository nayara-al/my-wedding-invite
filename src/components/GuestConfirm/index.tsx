'use client'
import React from 'react'
import { InputText } from '../InputText'

export default function guestConfirm() {
  return (
    <form>
        <InputText id='nome' label='Nome' placeholder='nome do convidado'/>
        <InputText id='email' label='E-mail para confirmação' placeholder='seuemail@mail.com' type='email'/>
    </form>
  )
}
